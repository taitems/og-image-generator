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

const ImagePicker = ({ onChange, value, options }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    console.log({ options })

    const Thumbs = ({ options, value }) => {
        const selectedStyle = {
            border: '3px solid red'
        }
        return (
            <>
                {options.map(p => {
                    const localStyle = p === value ? selectedStyle : null;
                    return <Image src={`images/${p}`} maxWidth={100} {...localStyle} key={p} onClick={e => { handleClick(p) }} />
                })}
            </>
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

            <Modal isOpen={isOpen} onClose={onClose}>
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