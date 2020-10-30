import React, { useState } from 'react';
import { Layer, Group, Rect, Text } from "react-konva";
import { ShapeGrid, GitHubLogo, CenterGroup } from '../helpers';
import { Interactive } from '../helpers/Interactive';

const DefaultTheme = ({ width, height, palette, description, fullName, owner, name, settings, onSelect, selectedLayer }) => {

    const [textHeight, setTextHeight] = useState(null);

    return <Layer>

        <Interactive id="artboard" onSelect={onSelect} selectedLayer={selectedLayer}>
            <Rect
                x={0}
                y={0}
                width={width}
                height={height}
                fill={settings.artboard.background}
            />
        </Interactive>

        <Group x={50} y={10}>
            <Interactive id="shapeGrid" onSelect={onSelect} selectedLayer={selectedLayer}>
                <ShapeGrid color={settings.shapeGrid.fill} shape={'square'} />
            </Interactive>
        </Group>


        <CenterGroup x={200} stageHeight={height} innerHeight={textHeight && 50 + textHeight}>

            <Group>

                <Interactive id="githubLogo" onSelect={onSelect} selectedLayer={selectedLayer}>
                    <GitHubLogo fill={settings.githubLogo.fill} width={32} height={32} y={-6} />
                </Interactive>

                <Interactive id="repoInfo" onSelect={onSelect} selectedLayer={selectedLayer}>
                    <Text
                        text={fullName}
                        fontFamily="Poppins"
                        fontSize={24}
                        fontStyle={600}
                        x={42}
                        fill={settings.repoInfo.color}
                    />
                </Interactive>
            </Group>

            <Interactive id="description" onSelect={onSelect} selectedLayer={selectedLayer}>
                <Text
                    text={description}
                    fontFamily="Poppins"
                    fontSize={72}
                    fontStyle={600}
                    fill={settings.description.color}
                    y={50}
                    width={width * 0.8}
                    letterSpacing={-2.5}
                    ref={node => {
                        node && setTextHeight(node.getHeight())
                    }}
                />
            </Interactive>
        </CenterGroup>
    </Layer>
}

export default DefaultTheme;