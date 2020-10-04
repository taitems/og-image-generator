import React, { useState } from 'react';
import { Flex } from "@chakra-ui/core";
import './App.css';
import { Artboard } from './components/Artboard';
import { paletteList } from './paletteList';
import { Sidebar } from './components/Sidebar';
import { ThemeProvider as ChakraProvider, CSSReset } from "@chakra-ui/core";
import { ThemeProvider } from './providers/theme';
import { Toolbar } from './components/Toolbar';

var FontFaceObserver = require('fontfaceobserver');

const palette = paletteList.default;

function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);


  var fontA = new FontFaceObserver('Inter', {
    weight: 400
  });
  var fontB = new FontFaceObserver('Inter', {
    weight: 800
  })
  var fontC = new FontFaceObserver('Poppins', {
    weight: 600
  });

  Promise.all([
    fontA.load(),
    fontB.load(),
    fontC.load()
  ]).then(function () {
    setFontsLoaded(true);
  });

  return fontsLoaded && (

    <ChakraProvider>
      <CSSReset />
      <ThemeProvider>
        <Flex height="100vh" direction="column">
          <Toolbar />
          <Flex height="100%" bg="gray.50">
            <Sidebar />
            <Flex
              flexGrow={1}
              flexShrink={0}
              justifyContent="center"
              alignItems="center"
            >
              <Artboard palette={palette} />
            </Flex>
          </Flex>
        </Flex>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
