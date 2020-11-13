import React from 'react';
import {
    Box, Flex, Image, Link, Text, useToast, Button,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/core";
import { useTheme } from "../../../providers/theme"
import { FetchUrl } from '../../FetchUrl';
import { getGithubRepo } from '../../getGithubRepo';

const RepoPicker = () => {

    const [{ repo }, { setRepo }] = useTheme();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();

    return (<>
        <Flex>
            <Box flexShrink="0">
                <Image src="../svg/logo-github.svg" width={30} height={30} />
            </Box>
            <Box ml={2} overflow="hidden">
                <Text
                    fontSize={12}
                    fontWeight={600}
                    whiteSpace="nowrap"
                    overflow="hidden"
                    textOverflow="ellipsis"
                >
                    {repo.full_name}
                </Text>
                <Text
                    fontSize={12}
                    whiteSpace="nowrap"
                    overflow="hidden"
                    textOverflow="ellipsis"
                >
                    {repo.description}
                </Text>
                <Text
                    fontSize={12}>
                    <Link
                        onClick={onOpen}
                        color="blue.500"
                        fontWeight="500"
                        textDecoration="underline"
                    >
                        Change repository
                </Link>
                </Text>
            </Box>
        </Flex>

        <Modal isOpen={isOpen} onClose={onClose} size={640}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Change Repository</ModalHeader>
                <ModalCloseButton />
                <ModalBody>

                    <Text>
                        Select a repository by pasting the <strong>public</strong> URL to a repository on GitHub.
                    </Text>

                    <FetchUrl callback={async item => {
                        const { provider, username, repo } = item;
                        if (provider === 'github') {
                            const githubRepo = await getGithubRepo(username, repo);
                            if (githubRepo.message) {
                                toast({
                                    title: "An error occurred.",
                                    description: `Github responded: ${githubRepo.message}`,
                                    status: "error",
                                    duration: 9000,
                                    isClosable: true,
                                    position: "top",
                                })
                            } else {
                                setRepo(githubRepo);
                                onClose();
                                toast({
                                    title: `Switched to ${githubRepo.full_name}`,
                                    status: "success",
                                    position: "top",
                                })
                            }
                        }
                        return false;
                    }} />

                </ModalBody>
                <ModalFooter>
                    <Button variantColor="gray" onClick={onClose}>
                        Cancel
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>

    </>)

}



// <Textarea value={repo.description} onChange={e => {
//     setRepo({ description: e.target.value })
// }}></Textarea> 

export { RepoPicker }