import type {
    InferGetStaticPropsType,
    GetStaticProps,
    GetStaticPaths,
} from "next";
import { mockMenu } from "../lib/mock";
import { useRouter } from "next/router";
export default function Page({ label }) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }
    return <h1>{label}</h1>;
}

// get paths for slugs
export const getStaticPaths = async () => {
    const paths = mockMenu.map((menuItem) => {
        return {
            params: { slug: menuItem?.key },
        };
    });

    return { paths, fallback: false };
};

// get props for page
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
