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
} from '@chakra-ui/core';

const ImagePicker = ({ value }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Image src={value} width={100} />

            <Button onClick={onOpen}>Open Modal</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Choose Image</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        djasdkhaksjdhaksdhkad jsdaks
                    </ModalBody>

                    <ModalFooter>
                        <Button variantColor="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant="ghost">Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}


export { ImagePicker }