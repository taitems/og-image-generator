import React, { useState, useContext, useReducer } from 'react';

const initialState = {
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
initialState.settings = require(`../templates/${initialState.theme}/settings.js`);
initialState.userSettings = initialState.settings.reduce((r, e) => {
    r[e.id] = e.value;
    return r;
}, {})

const ThemeContext = React.createContext();

const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({
    children
}) => {

    const [repo, setRepo] = useState(initialState.repo);
    const [theme, setTheme] = useState(initialState.theme);
    const [themeOptions, setThemeOptions] = useState({});
    const [reducedTheme, setThemeReducer] = useReducer(
        (reducedTheme, newReducedTheme) => ({ ...reducedTheme, ...newReducedTheme }),
        { id: initialState.theme, settings: initialState.settings, userSettings: initialState.userSettings }
    )

    // TODO: Kyle I tried to make setTheme mutate themeOptions on change
    // and React did not like that.

    return (
        <ThemeContext.Provider
            value={[{
                repo,
                theme,
                themeOptions,
                reducedTheme
            }, {
                setRepo,
                setTheme,
                setThemeOptions,
                setThemeReducer
            }]}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export { useTheme, ThemeContext, ThemeProvider };