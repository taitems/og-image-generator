import React from 'react';
import { Box, Flex, Image } from "@chakra-ui/core";
import { uiColors } from '../util/uiColors';

const { sidebarLayer } = uiColors;



const Layer = ({ label, id, level, visible = true, hideable = true, type, selected, hovered, setVisibility, ...theRest }) => {
    const hoveredColor = visible ? sidebarLayer.hovered : sidebarLayer.disabledHover;
    const selectedColor = visible ? sidebarLayer.hovered : sidebarLayer.disabledSelected;
    const bg = selected ? selectedColor : hovered ? hoveredColor : 'transparent';
    return (
        <Flex pl={level * 30} fontSize={14} py={1} bg={bg} {...theRest}>
            <Box mr={1}>
                <Image src={`/svg/${getIcon(type)}`} />
            </Box>
            <Box color={visible ? '#000' : '#AAA'} flexGrow="1">
                {label}
            </Box>
            {hideable && !visible && <Image src="/svg/icon-hidden.svg" justifySelf="flex-end" onClick={() => { setVisibility(id, true) }} />}
            {hideable && (selected || hovered) && visible && <Image src="/svg/icon-visible.svg" justifySelf="flex-end" onClick={() => { setVisibility(id, false) }} />}
            {!hideable && (selected || hovered) && <Image src="/svg/icon-locked.svg" justifySelf="flex-end" />}
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