import React from 'react';
import { Box } from '@chakra-ui/react';
import { FieldsetHeading } from './FieldsetHeading';
const Fieldset = ({ title, children }) => {
    return (
        <Box mb={4}>
            <FieldsetHeading>{title}</FieldsetHeading>
            {children}
        </Box>
    )
}

export { Fieldset }