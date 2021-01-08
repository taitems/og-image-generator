import React from 'react';
import { Textarea } from '@chakra-ui/react';

const DescriptionPicker = ({ onChange, value }) => {
    return (
        <Textarea
            onChange={e => {
                onChange(e.target.value)
            }}
            value={value || ''}
        />
    )
}

export { DescriptionPicker }