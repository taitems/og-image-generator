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
} from '@chakra-ui/react';
import { Thumbs } from './ImagePickerThumbs'

const ImagePicker = ({ onChange, value, options }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Image src={`images/${value}`} width={100} />

            <Button onClick={onOpen}>Open Modal</Button>

            <Modal isOpen={isOpen} onClose={onClose} size="xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Choose Image</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Thumbs options={options} value={value} callback={val => {
                            onChange(val);
                            onClose();
                        }} />
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" onClick={onClose}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}


export { ImagePicker }