import React, { useState } from 'react';
import './App.css';
import { ThemeProvider as ChakraProvider, CSSReset } from "@chakra-ui/core";
import { ThemeProvider } from './providers/theme';
import { Layout } from './Layout';

var FontFaceObserver = require('fontfaceobserver');

function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);


  var fontA400 = new FontFaceObserver('Inter', {
    weight: 400
  });
  var fontA600 = new FontFaceObserver('Inter', {
    weight: 600
  })
  var fontA800 = new FontFaceObserver('Inter', {
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
    fontA400.load(),
    fontA600.load(),
    fontA800.load(),
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
        <Layout />
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
