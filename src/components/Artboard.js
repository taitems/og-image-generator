import React, { useRef } from 'react';
import { Box, Button } from "@chakra-ui/core";
import { Stage } from "react-konva";
import { useTheme } from '../providers/theme';
import loadable from '@loadable/component'


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

// const placeholder = {
//     description: '',
//     fork: false,
//     forks: 0,
//     full_name: "",
//     language: "",
//     name: "",
//     open_issues: 0,
//     watchers: 0,
//     owner: {
//         avatar_url: "",
//         login: ''
//     }
// }

const Artboard = ({ palette }) => {

    const stageRef = useRef();

    const [{ theme, repo }] = useTheme();

    const SelectedTheme = loadable(() => import(`../templates/${theme}.js`));

    return <Box>
        <Box fontSize={13} py={1} color="gray.400">
            Artboard - {theme} Theme
        </Box>
        <Box boxShadow="0 2px 20px rgba(0,0,0,0.2)">
            <Stage width={template.width} height={template.height} ref={stageRef}>
                <SelectedTheme
                    width={template.width}
                    height={template.height}
                    palette={palette}
                    fullName={repo.full_name}
                    description={repo.description}
                    owner={repo.owner}
                    name={repo.name}
                />
            </Stage>
        </Box>
        <Button onClick={() => { download(stageRef) }}>
            Download
        </Button>
    </Box>
}

export { Artboard }