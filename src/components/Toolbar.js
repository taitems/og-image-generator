import React from 'react';
import { Text, Flex, Box, Button } from "@chakra-ui/core";

const Toolbar = () => {

    return (
        <Flex
            justifyContent="space-between"
            p={2}
            boxShadow="0 2px 8px rgba(0,0,0,0.2)"
        >
            <Text as="h1" fontWeight="800" fontSize="18px" letterSpacing="-.025em">OG Image Creator</Text>
            <Box justifySelf="flex-end">
                <Button variantColor="teal" variant="solid" size="sm">
                    Download
                </Button>
            </Box>
        </Flex>
    )
}

export { Toolbar }