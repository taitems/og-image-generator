import React from 'react';
import { Select } from '@chakra-ui/core';

const Dropdown = ({ onChange, value, options }) => {
    return (
        <Select
            zIndex={1}
            size="sm"
            onChange={onChange}
            value={value}
        >
            {options.map(item => (
                <option key={item.value} value={item.value}>
                    {item.text}
                </option>
            ))}
        </Select>
    )
}

export { Dropdown }