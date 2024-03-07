import type {
    InferGetStaticPropsType,
    GetStaticProps,
    GetStaticPaths,
} from "next";
import { mockMenu } from "../lib/mock";
import { useRouter } from "next/router";
export default function Page({ label }) {
    const router = useRouter();
    console.log(`name `, label);

    if (router.isFallback) {
        return <div>Loading...</div>;
    }
    return <h1>{label}</h1>;
}

// get paths for slugs
export const getStaticPaths = async () => {
    const paths = mockMenu.map((menuItem) => {
        console.log(`menuItem `, menuItem?.key);
        return {
            params: { slug: menuItem?.key },
        };
    });

    return { paths, fallback: false };
};

// get probs for page
export const getStaticProps = async (context: any) => {
    const itemMenu = mockMenu.filter(
        (itemMenu) => itemMenu.key === context.params.slug
    );
    if (!itemMenu) {
        return {
            notFound: true,
        };
    }
    const label = itemMenu[0]?.label;
    return { props: { label } };
};
