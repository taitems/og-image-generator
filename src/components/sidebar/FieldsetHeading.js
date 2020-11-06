import React from 'react';
import { Box, Text } from '@chakra-ui/core';
const FieldsetHeading = ({ children }) => {
    return (
        <Box
            borderBottomColor="gray.100"
            borderBottomWidth="1px"
            pb={2}
            mb={2}
        >
            <Text
                as="h2"
                textTransform="uppercase"
                letterSpacing="0.025em"
                fontSize="11px"
                fontWeight="800"
                color="gray.900"
            >
                {children}
            </Text>
        </Box>
    )
}

export { FieldsetHeading }