import React, { useRef } from 'react';
import { Box, Button } from "@chakra-ui/core";
import { Stage } from "react-konva";
import loadable from '@loadable/component';
import { useTheme } from '../providers/theme';


const template = {
    width: 1200,
    height: 627,
};


const downloadURI = (uri, name) => {
    const link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};


const download = stageRef => {
    const dataURL = stageRef.current.toDataURL({
        x: 0,
        y: 0,
        width: template.width,
        height: template.height
    })
    downloadURI(dataURL, "test");
}

const Artboard = ({ palette }) => {

    const stageRef = useRef();

    const [{ reducedTheme, repo }] = useTheme();

    const SelectedTheme = loadable(() => import(`../templates/${reducedTheme.id}`));

    return <Box>
        <Box fontSize={13} py={1} color="gray.400">
            Artboard - {template.width} x {template.height}
        </Box>
        <Box boxShadow="0 2px 20px rgba(0,0,0,0.1)">
            <Stage width={template.width} height={template.height} ref={stageRef}>
                <SelectedTheme
                    width={template.width}
                    height={template.height}
                    palette={palette}
                    fullName={repo.full_name}
                    description={repo.description}
                    owner={repo.owner}
                    name={repo.name}
                    settings={reducedTheme.userSettings}
                />
            </Stage>
        </Box>
        <Button onClick={() => { download(stageRef) }}>
            Download
        </Button>
    </Box>
}

export { Artboard }