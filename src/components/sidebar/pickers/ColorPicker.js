import React, { useState } from 'react';
import { Input, Box } from '@chakra-ui/core';
import { SketchPicker } from 'react-color';


const ColorPicker = ({ id, value, color, onChange, palette, updateOpenState }) => {

    const [isOpen, setIsOpen] = useState(false);

    const localOnChange = c => {
        const { r, g, b, a } = c.rgb;
        const color = a < 1 ? `rgba(${r},${g},${b},${a})` : c.hex;
        onChange(color);
    }

    return (
        <>
            <Box position="relative">
                <Box
                    position="absolute"
                    background={value}
                    width={'20px'}
                    height={'20px'}
                    borderRadius={2}
                    top="50%"
                    transform="translateY(-50%)"
                    left="8px"
                    boxShadow="0 1px 3px rgba(0,0,0,0.1)"
                />
                <Input
                    value={value}
                    pl={'36px'}
                    onClick={() => { setIsOpen(true) }}
                    readOnly
                />
            </Box>
            {isOpen && <>
                <Box position="fixed" top="0" right="0" bottom="0" left="0" onClick={() => {
                    setIsOpen(false)
                }} />
                <Box position="absolute" zIndex={2}>
                    <SketchPicker
                        color={color}
                        onChange={localOnChange}
                        presetColors={palette}
                    />
                </Box>
            </>}
        </>
    )
}

export { ColorPicker }