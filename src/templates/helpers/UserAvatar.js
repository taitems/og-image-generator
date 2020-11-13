import React from 'react'
import { Image } from "react-konva";
import { CircleImage } from "react-konva-helpers";
import useImage from 'use-image';

const UserAvatar = ({ src, rounded = true, ...props }) => {
    const [loadedSrc] = useImage(src);
    if (!loadedSrc) {
        return null;
    }
    return rounded ? <CircleImage src={loadedSrc} {...props} /> : <Image {...props} image={loadedSrc} />
}

export { UserAvatar }
