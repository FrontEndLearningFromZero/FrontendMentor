import { Flex, Menu, Tabs, TabsProps } from "antd";
import React from "react";
import { mock } from "../lib/mock";
const Task2 = () => {
    const RenderNode = ({ children }: { children: React.ReactNode }) => {
        return (
            <Flex align="center" justify="center" vertical>
                <Menu items={mock}></Menu>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error voluptatem, aperiam perspiciatis enim impedit
                    distinctio tempore maxime aut unde! Provident porro labore
                    et? Consectetur, deserunt dolorum dolore recusandae ea
                    aspernatur!
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error voluptatem, aperiam perspiciatis enim impedit
                    distinctio tempore maxime aut unde! Provident porro labore
                    et? Consectetur, deserunt dolorum dolore recusandae ea
                    aspernatur!
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error voluptatem, aperiam perspiciatis enim impedit
                    distinctio tempore maxime aut unde! Provident porro labore
                    et? Consectetur, deserunt dolorum dolore recusandae ea
                    aspernatur!
                </div>
                {children}
            </Flex>
        );
    };

    const items: TabsProps["items"] = [
        {
            key: "1",
            label: "Strategy 1",
            children: (
                <RenderNode>
                    <h1>Hello</h1>
                </RenderNode>
            ),
        },
        {
            key: "2",
            label: "Tab 2",
            children: (
                <RenderNode>
                    <h1>Using Tab Component</h1>
                </RenderNode>
            ),
        },
        {
            key: "3",
            label: "Strategy 3",
            children: (
                <RenderNode>
                    <h1>Hello 123213</h1>
                </RenderNode>
            ),
        },
    ];

    return (
        <>
            <Flex
                justify="space-between"
                align="center"
                style={{ borderColor: "green", borderStyle: "solid" }}
            >
                <div>Logo</div>
                <div>Old Menu</div>
                <div>Profile</div>
            </Flex>
            <Flex
                justify="center"
                align="center"
                style={{ borderColor: "green", borderStyle: "solid" }}
            >
                <div
                    className="ant-tabs-nav-wrap"
                    style={{ justifyContent: "center" }}
                >
                    <Tabs items={items} size={"large"}></Tabs>
                </div>
            </Flex>
        </>
    );
};

export default Task2;
