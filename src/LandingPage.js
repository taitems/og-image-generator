import React from 'react';
import {
    Link
} from "react-router-dom";

import { Link as ChakraLink, Heading, Text, Image, Flex, Box, Button } from "@chakra-ui/react";

const LandingPage = () => {

    return <Box display="grid" placeItems="center" height="100vh">
        <Flex flexDirection="column" textAlign="center" alignItems="center">

            <Image src="example.png" width={400} alt="Example images generated by the tool" />

            <Heading>OG Image Creator</Heading>

            <Text
                as="p"
                width="100%"
                maxWidth={600}
                fontSize={20}
                mt={3}
                mb={4}
            >
                An open source tool to create Open Graph images for use in your Github Repositories and on social media.
            </Text>

            <Link to="/editor">
                <Button
                    bg="gray.900"
                    _hover={{ bg: "gray.700" }}
                    color="white"
                    px={10}
                    mb={3}
                >
                    Open Editor
                </Button>
            </Link>

            <Text
                as="p"
                fontSize={14}
                color="gray.500"
            >
                Built by <ChakraLink href="http://taitbrown.com" target="_blank">@taitems</ChakraLink> in Melbourne, Australia.
            </Text>
        </Flex>
    </Box>

}

export { LandingPage }