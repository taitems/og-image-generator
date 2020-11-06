import React, { useState } from 'react';
import { Input, Button, Flex } from "@chakra-ui/core";

// https://api.github.com/users/taitems/repos
// https://api.github.com/repos/taitems/Appfail-JavaScript

const FetchUrl = ({ callback }) => {

    const [url, setUrl] = useState("https://github.com/taitems/Aristo-jQuery-UI-Theme")

    const getProvider = url => {
        if (url.match('https://github.com') || url.match('https://www.github.com')) {
            return 'github';
        } else {
            return null
        }
    }

    const onSubmit = e => {
        // console.log(getProvider())
        const provider = getProvider(url);
        if (provider === 'github') {
            // url.
            const path = url.split('github.com/')[1];
            const [username, repo] = path.split('/');
            console.log({ username });
            console.log({ repo });
            callback({
                provider,
                username,
                repo
            })
        }
        e.preventDefault();
        return false;
    };

    return <form onSubmit={onSubmit}>
        <Flex>
            <Input
                type="text"
                onChange={e => { setUrl(e.target.value) }}
                value={url}
            />
            <Button type="submit" variantColor="blue">Fetch</Button>
        </Flex>
    </form>
}

export { FetchUrl }