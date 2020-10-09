import React from 'react';
import { Text, Flex, Box, Button, Link } from "@chakra-ui/core";

const Toolbar = () => {

    return (
        <Flex
            justifyContent="space-between"
            p={2}
            boxShadow="0 2px 8px rgba(0,0,0,0.1)"
            pos="relative"
        >
            <Text as="h1" fontWeight="800" fontSize="18px" letterSpacing="-.025em">OG Image Creator</Text>
            <Box justifySelf="flex-end">
                <Button variantColor="teal" variant="ghost" size="sm">
                    <Link href="https://github.com/taitems/og-image-generator/issues" isExternal>Issues/Feedback</Link>
                </Button>
            </Box>
        </Flex>
    )
}

export { Toolbar }