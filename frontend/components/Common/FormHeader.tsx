import React from 'react';
import {Text} from "@nextui-org/react";

const FormHeader = ({title, subTitle, description} : {title: string, subTitle: string, description: string}) => {
    return (
        <>
            <Text size='$3xl' b>{title}</Text>
            <Text size='$xl' color="#757575" b>{subTitle}</Text>
            <Text size='$md' color="#9E9E9E">{description}</Text>
        </>
    );
};

export default FormHeader;