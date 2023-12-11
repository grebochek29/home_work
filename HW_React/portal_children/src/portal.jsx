import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const PortalComponent = () => {
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  const handleTogglePortal = () => {
    setIsPortalOpen(!isPortalOpen);
  };

  return (
    <div>
      <button onClick={handleTogglePortal}>
        {isPortalOpen ? 'Скрыть' : 'Показать'}
      </button>
      {isPortalOpen &&
        ReactDOM.createPortal(
          <PortalContent />,
          document.getElementById('portal-root')
        )}
    </div>
  );
};

const PortalContent = () => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <p>:) portal</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <PortalComponent />
      <div id="portal-root"></div>
    </div>
  );
};

export default App;