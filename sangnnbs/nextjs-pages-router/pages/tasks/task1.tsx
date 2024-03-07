import {
    Card,
    ConfigProvider,
    Flex,
    Image,
    Layout,
    Space,
    Typography,
} from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";

const Task1 = () => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Card: {},
                },
            }}
        >
            <Layout
                style={{
                    backgroundColor: "beige",
                    height: "800px",
                }}
            >
                <Content>
                    <Flex vertical align="center" justify="center">
                        <Card style={{ backgroundColor: "orange" }}>
                            <Flex justify="space-between">
                                <Flex vertical>
                                    <Typography.Text>
                                        My balance
                                    </Typography.Text>
                                    <Typography.Text>$921.48</Typography.Text>
                                </Flex>
                                <Image src="/images-task1/logo.svg" />
                            </Flex>
                        </Card>
                        <Card style={{ backgroundColor: "whitesmoke" }}></Card>
                    </Flex>
                </Content>
            </Layout>
        </ConfigProvider>
    );
};

export default Task1;
