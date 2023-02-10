import React from 'react';
import {Text} from "@nextui-org/react";

const FormHeader = ({title, subTitle, descrtiption}) => {
    return (
        <>
            <Text size='$3xl' b>{title}</Text>
            <Text size='$xl' color="#757575" b>{subTitle}</Text>
            <Text size='$md' color="#9E9E9E">{descrtiption}</Text>
        </>
    );
};

export default FormHeader;