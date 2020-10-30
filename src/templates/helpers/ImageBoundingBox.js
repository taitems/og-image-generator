import React from 'react';
import { Group, Image } from "react-konva";
import useImage from 'use-image';

/**
 * Conserve aspect ratio of the original region. Useful when shrinking/enlarging
 * images to fit into a certain area.
 *
 * @param {Number} srcWidth width of source image
 * @param {Number} srcHeight height of source image
 * @param {Number} maxWidth maximum available width
 * @param {Number} maxHeight maximum available height
 * @return {Object} { width, height }
 */
function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {

    var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

    return { width: srcWidth * ratio, height: srcHeight * ratio };
}

const ImageBoundingBox = ({ imagePath, maxWidth, maxHeight, x = 0, y = 0 }) => {

    const [image] = useImage(imagePath);

    if (!image) {
        return null;
    }

    const imageDimensions = calculateAspectRatioFit(image.width, image.height, maxWidth, maxHeight)
    const { width, height } = imageDimensions;
    const imageX = (maxWidth - width) / 2;
    const imageY = (maxHeight - height) / 2;

    return (
        <Group x={x} y={y}>
            <Image
                image={image}
                width={width}
                height={height}
                x={imageX}
                y={imageY}
            />
        </Group>
    )
}

export { ImageBoundingBox };