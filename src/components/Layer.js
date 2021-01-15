import React from 'react';
import { Box, Flex, Image } from "@chakra-ui/react";
import { uiColors } from '../util/uiColors';

const { sidebarLayer } = uiColors;

const Layer = ({ label, id, level, visible = true, hideable = true, type, selected, hovered, setVisibility, ...theRest }) => {
    const hoveredColor = visible ? sidebarLayer.hovered : sidebarLayer.disabledHover;
    const selectedColor = visible ? sidebarLayer.selected : sidebarLayer.disabledSelected;
    const bg = selected ? selectedColor : hovered ? hoveredColor : 'transparent';
    return (
        <Flex pl={level * 30 + 'px'} fontSize={14} py={1} bg={bg} cursor="default" {...theRest}>
            <Box mr={1}>
                <Image
                    src={`/svg/${getIcon(type)}`}
                    alt={`${capitalizeFirstLetter(type)} icon`}
                    opacity={visible ? 1 : 0.5}
                />
            </Box>
            <Box color={visible ? '#000' : 'gray.600'} flexGrow="1">
                {label}
            </Box>
            {hideable && !visible && <Image src="/svg/icon-hidden.svg" justifySelf="flex-end" onClick={() => { setVisibility(id, true) }} alt="Hidden layer" />}
            {hideable && (selected || hovered) && visible && <Image src="/svg/icon-visible.svg" justifySelf="flex-end" onClick={() => { setVisibility(id, false) }} alt="Hide layer" />}
            {!hideable && (selected || hovered) && <Image src="/svg/icon-locked.svg" justifySelf="flex-end" alt="Locked layer" />}
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

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export { Layer }