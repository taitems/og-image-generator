import React from 'react';
import { Flex } from "@chakra-ui/react";
import { Artboard } from './components/Artboard';
import { Sidebar } from './components/Sidebar';
import { Toolbar } from './components/Toolbar';
import { Properties } from './components/Properties';
import { useTheme } from './providers/theme';



const Layout = () => {

  const { setSelectedLayer } = useTheme()[1];

  const handleClickOut = e => {
    if (!!e.target.getAttribute('data-id')) {
      setSelectedLayer(null)
    }
  }
  return (
    <Flex height="100vh" direction="column">
      <Toolbar />
      <Flex height="100%" bg="gray.50">
        <Sidebar />
        <Flex
          flexGrow={1}
          flexShrink={1}
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          onClick={handleClickOut}
          data-id="artboard-wrapper"
        >
          <Artboard />
        </Flex>
        <Properties />
      </Flex>
    </Flex>
  )
}

export { Layout };
