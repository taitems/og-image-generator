import React from 'react';
import { Box } from "@chakra-ui/core";
import { Stage } from "react-konva";
import loadable from '@loadable/component';
import { ThemeProvider, useTheme } from '../providers/theme';


const Artboard = ({ palette }) => {

    const [{ stageRef, theme, layout, repo }] = useTheme();

    const SelectedTheme = loadable(() => import(`../templates/${theme.id}`));

    return <Box>
        <Box fontSize={13} py={1} color="gray.400">
            Artboard - {layout.width} x {layout.height}
        </Box>
        <Box boxShadow="0 2px 20px rgba(0,0,0,0.1)">
            <Stage width={layout.width} height={layout.height} ref={stageRef}>
                <ThemeProvider>
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
                    />
                </ThemeProvider>
            </Stage>
        </Box>
    </Box>
}

export { Artboard }