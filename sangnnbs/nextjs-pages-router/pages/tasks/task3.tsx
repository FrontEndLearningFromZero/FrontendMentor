import { Flex, Menu, MenuProps } from "antd";
import React from "react";
import { mock, mockMenu } from "../lib/mock";
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
                    style={{ display: "flex", minWidth: 0 }}
                >
                    Old Menu
                </Menu>
                <div>Profile</div>
            </Flex>
        </>
    );
};

export default Task2;
