import React from 'react';
import { Select } from '@chakra-ui/core';

const FontPicker = ({ onChange, value, options }) => {
    return (
        <Select
            zIndex={1}
            size="sm"
            onChange={onChange}
            value={value}
        >
            {options.map(item => (
                <option key={item} value={item}>
                    {item}
                </option>
            ))}
        </Select>
    )
}

export { FontPicker }