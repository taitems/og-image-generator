import React from 'react';
import { Button, Tooltip } from "@chakra-ui/core"
import { useTheme } from '../providers/theme';


const DownloadButton = () => {

    const [{ stageRef, layout }, { setSelectedLayer, setHoveredLayer }] = useTheme();

    const downloadURI = (uri, name) => {
        const link = document.createElement("a");
        link.download = name;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const snapshot = () => {
        const fragment = new Date().valueOf().toString().slice(-6);
        const dataURL = stageRef.current.toDataURL({
            x: 0,
            y: 0,
            width: layout.width,
            height: layout.height
        })
        downloadURI(dataURL, `og-image-${fragment}`);
    }

    const download = stageRef => {
        // Hide all UI boxes
        setSelectedLayer(null);
        setHoveredLayer(null);
        setTimeout(() => {
            snapshot(stageRef)
        }, 100);
    }

    return (
        <Tooltip label="Download as PNG">
            <Button
                alignSelf="flex-end"
                width="100%"
                bg="gray.900"
                _hover={{ bg: "gray.700" }}
                color="white"
                onClick={() => { download(stageRef) }}
            >
                Download
            </Button>
        </Tooltip>
    );
}


export { DownloadButton }