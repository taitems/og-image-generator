import React from 'react';
import { Image } from '@chakra-ui/core';

const ImagePicker = ({ value }) => {
    return <Image src={value} width={100} />
}

export { ImagePicker }