import React from 'react';
import { Input, Box } from '@chakra-ui/core';
import { SketchPicker } from 'react-color';


const ColorPicker = ({ id, value, isOpen, color, onChange, updateOpenState }) => {
    return (
        <>
            <Input
                value={value}
                onClick={() => { updateOpenState({ [id]: true }) }}
                readOnly
            />
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