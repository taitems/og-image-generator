import React, { useState, useContext } from 'react';

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

const ThemeContext = React.createContext();

const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({
    children
}) => {

    const [repo, setRepo] = useState(initialState.repo);
    const [theme, setTheme] = useState(initialState.theme);
    const [themeOptions, setThemeOptions] = useState({});

    return (
        <ThemeContext.Provider
            value={[{
                repo,
                theme,
                themeOptions
            }, {
                setRepo,
                setTheme,
                setThemeOptions
            }]}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export { useTheme, ThemeContext, ThemeProvider };