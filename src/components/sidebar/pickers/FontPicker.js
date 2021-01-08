import React from 'react';
import { Select } from '@chakra-ui/react';

const FontPicker = ({ onChange, value, options }) => {
    return (
        <Select
            zIndex={1}
            size="sm"
            onChange={e => {
                onChange(e.target.value)
            }}
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