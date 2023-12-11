import React, { useState } from 'react';
import PortalComponent from './portal'
import ParentComponent from './children'

function App() {
  return (
    <div>
       <PortalComponent />
       <ParentComponent />
    </div>
  );
}

export default App;
