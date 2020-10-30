import React from 'react';
import { Button, Tooltip } from "@chakra-ui/core"
import { useTheme } from '../providers/theme';


const DownloadButton = () => {

    const [{ stageRef, layout }] = useTheme();

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

    return (
        <Tooltip label="Download as PNG">
            <Button
                alignSelf="flex-end"
                width="100%"
                variantColor="teal"
                onClick={() => { download(stageRef) }}
            >
                Download
            </Button>
        </Tooltip>
    );
}


export { DownloadButton }