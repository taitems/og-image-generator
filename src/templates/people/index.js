import React from 'react';
import { Layer, Group, Rect, Text, Image } from "react-konva";
import useImage from 'use-image';

const PeopleTheme = ({ width, height, palette, description, fullName, owner, name }) => {

    const [image] = useImage('images/github-light.png');
    const [peopleImage] = useImage('images/035.png');
    // const [peopleImage] = useImage('images/055.png');

    return <Layer>

        <Rect
            x={0}
            y={0}
            width={width}
            height={height}
            fill={'#FFF'}
        />

        <Image image={peopleImage} width={320} height={320} x={800} y={100} />

        <Group x={50}>

            <Group y={160}>
                <Image image={image} width={32} height={32} y={-6} />
                <Text
                    text={fullName}
                    fontFamily="Inter"
                    fontSize={24}
                    fontStyle={400}
                    x={42}
                    fill={'#000'}
                />
            </Group>

            <Text
                text={description}
                fontFamily="Inter"
                fontSize={60}
                fontStyle={800}
                fill={'#000'}
                y={210}
                width={width * 0.55}
                letterSpacing={-2.5}
            />
        </Group>
    </Layer>
}

export default PeopleTheme;