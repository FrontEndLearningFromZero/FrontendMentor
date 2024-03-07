import { Anchor } from "antd";
import { AnchorLinkItemProps } from "antd/es/anchor/Anchor";
import AnchorLink from "antd/es/anchor/AnchorLink";
import React from "react";

const Index = () => {
    const items: AnchorLinkItemProps[] = [
        {
            key: 1,
            href: "/repo",
            title: "repo",
        },
        {
            key: 2,
            href: "/tasks/task1",
            title: "tasks1",
        },
    ];

    return (
        <>
            <Anchor items={items}></Anchor>
        </>
    );
};

export default Index;
