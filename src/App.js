import React from 'react';
import { TinaProvider, TinaCMS } from 'tinacms';
import Home from './Home';

function App() {
  const cms = new TinaCMS({
    enabled: false,
    sidebar: {
      hidden: true,
    },
    toolbar: { hidden: false },
  });

  return (
    <TinaProvider cms={cms}>
      <Home />
    </TinaProvider>
  );
}

export default App;
