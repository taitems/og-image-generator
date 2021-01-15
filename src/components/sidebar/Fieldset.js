import React from 'react';
import { Box } from '@chakra-ui/react';
import { FieldsetHeading } from './FieldsetHeading';
const Fieldset = ({ title, id = null, children }) => {
    return (
        <Box mb={4}>
            <FieldsetHeading id={id}>{title}</FieldsetHeading>
            {children}
        </Box>
    )
}

export { Fieldset }