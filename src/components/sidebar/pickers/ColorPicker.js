import React from 'react';
import { Input, Box } from '@chakra-ui/core';
import { SketchPicker } from 'react-color';


const ColorPicker = ({ id, value, isOpen, color, onChange, updateOpenState }) => {
    return (
        <>
            <Box position="relative">
                <Box position="absolute" background={value} width={'20px'} height={'20px'} borderRadius={2} top="50%" transform="translateY(-50%)" left="8px" />
                <Input
                    value={value}
                    pl={'36px'}
                    onClick={() => { updateOpenState({ [id]: true }) }}
                    readOnly
                />
            </Box>
            {isOpen && <>
                <Box position="fixed" top="0" right="0" bottom="0" left="0" onClick={() => {
                    updateOpenState({ [id]: false })
                }} />
                <Box position="absolute" zIndex={2}>
                    <SketchPicker
                        color={color}
                        onChange={onChange}
                    />
                </Box>
            </>}
        </>
    )
}

export { ColorPicker }