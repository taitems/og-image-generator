import React from 'react';
import {
    Image,
    Flex,
    Box
} from '@chakra-ui/react';

const Thumbs = ({ options, value, callback }) => {

    const handleClick = val => {
        if (val === value) {
            return;
        } else {
            callback(val);
        }
    }

    const selectedStyle = {
        opacity: 0.2
    }
    const unselectedStyle = {
        cursor: 'pointer'
    }
    return (
        <Flex flexWrap="wrap">
            {options && options.map(p => {
                const localStyle = p === value ? selectedStyle : unselectedStyle;
                const thumbUrl = `images/${p.replace('.png', '-thumb.png')}`
                return <Box p={3} key={p}>
                    <Image
                        src={thumbUrl}
                        width={120}
                        height={120}
                        objectFit="contain"
                        {...localStyle}
                        onClick={e => { handleClick(p) }}
                    />
                </Box>
            })}
        </Flex>
    )
};

export { Thumbs };