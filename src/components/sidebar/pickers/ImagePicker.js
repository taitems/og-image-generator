import React from 'react';
import {
    Button,
    Image,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Flex,
    Box
} from '@chakra-ui/core';

const ImagePicker = ({ onChange, value, options }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    console.log({ options })

    const Thumbs = ({ options, value }) => {
        const selectedStyle = {
            opacity: 0.2
        }
        const unselectedStyle = {
            cursor: 'pointer'
        }
        return (
            <Flex flexWrap="wrap">
                {options.map(p => {
                    const localStyle = p === value ? selectedStyle : unselectedStyle;
                    return <Box p={3} key={p}>
                        <Image src={`images/${p}`} width={120} height={120} objectFit="contain" {...localStyle} onClick={e => { handleClick(p) }} />
                    </Box>
                })}
            </Flex>
        )
    };

    const handleClick = val => {
        if (val === value) {
            return;
        } else {
            onChange(val);
            onClose();
        }
    }

    return (
        <>
            <Image src={`images/${value}`} width={100} />

            <Button onClick={onOpen}>Open Modal</Button>

            <Modal isOpen={isOpen} onClose={onClose} size={640}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Choose Image</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Thumbs options={options} value={value} />
                    </ModalBody>

                    <ModalFooter>
                        <Button variantColor="blue" onClick={onClose}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}


export { ImagePicker }