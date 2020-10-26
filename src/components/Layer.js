import React from 'react';
import { Box, Flex } from "@chakra-ui/core";

const Layer = ({ label, level, visible = true, type, selected, ...theRest }) => {
    return (
        <Flex pl={level * 30} fontSize={14} py={1} background={selected ? 'red' : 'transparent'} {...theRest}>
            <Box mr={1}>
                <img src={`/svg/${getIcon(type)}`} alt="" />
            </Box>
            <Box color={visible ? '#000' : '#AAA'}>{label}</Box>
        </Flex>
    );
}

const getIcon = type => {
    switch (type) {
        case 'artboard':
            return 'icon-artboard.svg';
        case 'text':
            return 'icon-text.svg';
        case 'image':
        case 'svg':
            return 'icon-image.svg';
        case 'group':
            return 'icon-layer.svg';
        default:
            return 'icon-layer.svg';
    }
}

export { Layer }