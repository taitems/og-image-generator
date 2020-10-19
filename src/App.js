import React, { useState } from 'react';
import { Flex } from "@chakra-ui/core";
import './App.css';
import { Artboard } from './components/Artboard';
import { paletteList } from './paletteList';
import { Sidebar } from './components/Sidebar';
import { ThemeProvider as ChakraProvider, CSSReset } from "@chakra-ui/core";
import { ThemeProvider } from './providers/theme';
import { Toolbar } from './components/Toolbar';
import { Properties } from './components/Properties';

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
  var fontD = new FontFaceObserver('Libre Baskerville', {
    weight: 400
  });
  var fontE = new FontFaceObserver('Libre Baskerville', {
    weight: 700
  });

  Promise.all([
    fontA.load(),
    fontB.load(),
    fontC.load(),
    fontD.load(),
    fontE.load(),
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
              flexShrink={1}
              justifyContent="center"
              alignItems="center"
              overflow="hidden"
            >
              <Artboard palette={palette} />
            </Flex>
            <Properties />
          </Flex>
        </Flex>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
