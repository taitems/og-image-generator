import React from 'react';

const context = {
    theme: 'default',
    repo: {
        description: 'The "Aristo" theme for Cappuccino ported to a jQuery UI Theme',
        fork: false,
        forks: 172,
        full_name: "taitems/Aristo-jQuery-UI-Theme",
        language: "JavaScript",
        name: "Aristo-jQuery-UI-Theme",
        open_issues: 10,
        watchers: 1367,
        owner: {
            avatar_url: "https://avatars2.githubusercontent.com/u/234593?v=4",
            login: 'taitems'
        }
    }
}

export const MyContext = React.createContext({
    context
})