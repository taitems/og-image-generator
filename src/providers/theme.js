import React, { useState, useContext, useReducer } from 'react';
import reduceTheme from '../functions/reduceTheme';

const initialState = {}
initialState.theme = 'default';
initialState.settings = require(`../templates/${initialState.theme}/settings.js`);
initialState.userSettings = reduceTheme(initialState.settings);
initialState.repo = {
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

const ThemeContext = React.createContext();

const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({
    children
}) => {

    const [repo, setRepo] = useState(initialState.repo);
    const [theme, setTheme] = useReducer(
        (oldTheme, newTheme) => ({ ...oldTheme, ...newTheme }),
        { id: initialState.theme, settings: initialState.settings, userSettings: initialState.userSettings }
    )

    return (
        <ThemeContext.Provider
            value={[{
                repo,
                theme
            }, {
                setRepo,
                setTheme
            }]}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export { useTheme, ThemeContext, ThemeProvider };