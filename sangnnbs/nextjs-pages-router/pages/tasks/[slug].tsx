import { Flex, Menu } from "antd";
import { mockMenu } from "../lib/mock";
import { useRouter } from "next/router";
export default function Page({ label, newkey }) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <Flex
                justify="space-between"
                align="center"
                style={{ borderColor: "green", borderStyle: "solid" }}
            >
                <div>Logo</div>
                <Menu
                    items={mockMenu}
                    mode="horizontal"
                    onClick={(e) => {
                        alert(`${newkey}`);
                        alert(router.query.slug);
                    }}
                    style={{ display: "flex", minWidth: 0 }}
                >
                    Old Menu
                </Menu>
                <div>Profile</div>
            </Flex>
            <Flex
                justify="center"
                align="center"
                style={{ borderColor: "green", borderStyle: "solid" }}
            >
                {label}
            </Flex>
        </>
    );
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
    const data = itemMenu[0];
    let newData = Object.assign({}, { label: data?.label, newkey: data?.key });

    return { props: newData };
};
