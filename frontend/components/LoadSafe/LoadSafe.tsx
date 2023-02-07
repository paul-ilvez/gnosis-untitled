import React from 'react';
import Layout from "@/components/Layout";
import ConnectSafe from "@/components/LoadSafe/Steps/ConnectSafe";

const screens = {
    connectSafe: <ConnectSafe />,

}

const LoadSafe = () => {
    return (
        <Layout>
            {screens["connectSafe"]}
        </Layout>
    );
};

export default LoadSafe;