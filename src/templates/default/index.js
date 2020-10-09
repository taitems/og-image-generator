import React, { useState } from 'react';
import { Layer, Group, Rect, Text } from "react-konva";
import { ShapeGrid, GitHubLogo, CenterGroup } from '../helpers';

const DefaultTheme = ({ width, height, palette, description, fullName, owner, name, settings }) => {

    const [textHeight, setTextHeight] = useState(null);

    return <Layer>

        <Rect
            x={0}
            y={0}
            width={width}
            height={height}
            fill={settings.bgColor}
        />

        <ShapeGrid color={palette.shape} shape={settings.shape} x={50} y={10} />

        <CenterGroup x={200} stageHeight={height} innerHeight={textHeight && 50 + textHeight}>

            <Group>

                <GitHubLogo fill={settings.gitHubColor} width={32} height={32} y={-6} />

                <Text
                    text={fullName}
                    fontFamily="Poppins"
                    fontSize={24}
                    fontStyle={600}
                    x={42}
                    fill={settings.userTextColor}
                />
            </Group>

            <Text
                text={description}
                fontFamily="Poppins"
                fontSize={72}
                fontStyle={600}
                fill={settings.textColor}
                y={50}
                width={width * 0.8}
                letterSpacing={-2.5}
                ref={node => {
                    node && setTextHeight(node.getHeight())
                }}
            />
        </CenterGroup>
    </Layer>
}

export default DefaultTheme;