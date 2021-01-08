import React from 'react';
import { Box } from '@chakra-ui/react';
import { EmptyState } from './EmptyState';
import { PropertySwitch } from './PropertySwitch';

const PropertyList = ({ properties, onSettingChange }) => {
    const { visible, ...otherProperies } = properties;
    if (!visible) {
        return <EmptyState text="No visible layer selected" />
    } else if (!otherProperies || Object.keys(otherProperies).length === 0) {
        return <EmptyState text="No editable properties" />
    } else {
        return otherProperies && Object.keys(otherProperies).map((propertyId, index) => {
            const p = otherProperies[propertyId];
            return (
                <Box key={index}>
                    <Box>
                        {p.label}
                    </Box>
                    <Box>
                        <PropertySwitch
                            value={p.value}
                            id={p.id}
                            type={p.type}
                            options={p.options}
                            onChange={onSettingChange} />
                    </Box>
                </Box>
            )
        })
    }
}

export { PropertyList }