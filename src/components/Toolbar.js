import React from 'react';
import { Text, Flex, Box, Button, Link } from "@chakra-ui/react";
import pkg from '../../package.json';

const Toolbar = () => {

    return (
        <Flex
            justifyContent="space-between"
            p={2}
            boxShadow="0 2px 4px rgba(0,0,0,0.1), 0 3px 12px rgba(0,0,0,0.05)"
            pos="relative"
        >
            <Flex>
                <Text
                    as="h1"
                    fontWeight="800"
                    fontSize="18px"
                    letterSpacing="-.025em"
                >
                    OG Image Creator
                </Text>
                <Text
                    as="span"
                    fontSize="11px"
                    letterSpacing=".05em"
                    color="gray.600"
                    role="presentation"
                    ml={2}
                >
                    <span style={{ marginRight: '1px' }}>V</span>
                    {pkg.version}
                </Text>
            </Flex>
            <Box justifySelf="flex-end">
                <Button colorScheme="teal" variant="ghost" size="sm">
                    <Link href="https://github.com/taitems/og-image-generator/issues" isExternal>Issues/Feedback</Link>
                </Button>
            </Box>
        </Flex>
    )
}

export { Toolbar }