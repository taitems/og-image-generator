import React, { useState, useContext, useReducer } from 'react';
import { flattenSettings } from '../functions/flattenSettings';
import { flattenSettingsRaw } from '../functions/flattenSettingsRaw';

const initialState = {}
initialState.theme = 'people';
// initialState.theme = 'default';
// initialState.theme = 'centered';
initialState.settings = require(`../templates/${initialState.theme}/settings.js`);
initialState.userSettings = flattenSettings(initialState.settings);
initialState.userSettingsRaw = flattenSettingsRaw(initialState.settings);
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

const ThemeContext = React.createContext([[], () => { }])

const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({
    children
}) => {

    const [stageRef, setStageRef] = useState();

    const [layout, setLayout] = useState({
        width: 1200,
        height: 627,
    });

    const [repo, setRepo] = useReducer(
        (oldRepo, newRepo) => ({ ...oldRepo, ...newRepo }),
        { ...initialState.repo }
    );
    const [theme, setTheme] = useReducer(
        (oldTheme, newTheme) => ({ ...oldTheme, ...newTheme }),
        { id: initialState.theme, settings: initialState.settings, userSettings: initialState.userSettings, userSettingsRaw: initialState.userSettingsRaw }
    )
    const [selectedLayer, setSelectedLayer] = useState(null);
    const [selectedLayerDimensions, setSelectedLayerDimensions] = useState({});
    const [hoveredLayer, setHoveredLayer] = useState(null);
    const [hoveredLayerDimensions, setHoveredLayerDimensions] = useState({});

    return (
        <ThemeContext.Provider
            value={[{
                repo,
                theme,
                stageRef,
                layout,
                selectedLayer,
                selectedLayerDimensions,
                hoveredLayer,
                hoveredLayerDimensions
            }, {
                setRepo,
                setTheme,
                setStageRef,
                setLayout,
                setSelectedLayer,
                setSelectedLayerDimensions,
                setHoveredLayer,
                setHoveredLayerDimensions
            }]}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export { useTheme, ThemeContext, ThemeProvider };