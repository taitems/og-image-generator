import React, { useState } from 'react';
import './App.css';
import { ChakraProvider } from "@chakra-ui/react"
import { ThemeProvider } from './providers/theme';
import { EditorLayout } from './EditorLayout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { LandingPage } from './LandingPage';

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
    <Router>
      <ChakraProvider>
        <ThemeProvider>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/editor">
              <EditorLayout />
            </Route>
          </Switch>
        </ThemeProvider>
      </ChakraProvider>
    </Router>
  );
}

export default App;
