import React, { useRef } from 'react';
import { Box, Button, Icon, Tooltip } from "@chakra-ui/core";
import { Stage } from "react-konva";
import loadable from '@loadable/component';
import { useTheme } from '../providers/theme';


const Artboard = ({ palette }) => {

    const stageRef = useRef();

    const [{ theme, layout, repo, selectedLayer }, { setSelectedLayer }] = useTheme();

    const downloadURI = (uri, name) => {
        const link = document.createElement("a");
        link.download = name;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const download = stageRef => {
        const fragment = new Date().valueOf().toString().slice(-6);
        const dataURL = stageRef.current.toDataURL({
            x: 0,
            y: 0,
            width: layout.width,
            height: layout.height
        })
        downloadURI(dataURL, `og-image-${fragment}`);
    }

    const SelectedTheme = loadable(() => import(`../templates/${theme.id}`));

    return <Box>
        <Box fontSize={13} py={1} color="gray.400">
            Artboard - {layout.width} x {layout.height}
        </Box>
        <Box boxShadow="0 2px 20px rgba(0,0,0,0.1)">
            <Stage width={layout.width} height={layout.height} ref={stageRef}>
                <SelectedTheme
                    width={layout.width}
                    height={layout.height}
                    palette={palette}
                    fullName={repo.full_name}
                    description={repo.description}
                    owner={repo.owner}
                    forks={repo.forks}
                    openIssues={repo.open_issues}
                    watchers={repo.watchers}
                    name={repo.name}
                    settings={theme.userSettings}
                    onSelect={setSelectedLayer}
                    selectedLayer={selectedLayer}
                />
            </Stage>
        </Box>
        <Tooltip label="Download as PNG">
            <Button
                position="fixed"
                bottom="30px"
                right="30px"
                variantColor="green"
                borderRadius="200px"
                height="50px"
                width="50px"
                onClick={() => { download(stageRef) }}
            >
                <Icon name="download" />
            </Button>
        </Tooltip>
    </Box>
}

export { Artboard }