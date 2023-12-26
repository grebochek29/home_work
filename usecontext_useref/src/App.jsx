import React, { createContext, useContext, useState, useRef } from 'react';


const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};




const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header style={{ background: theme === 'light' ? '#eee' : '#333', padding: '10px' }}>
      <h1>Theme Switcher</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
};

const Content = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ color: theme === 'light' ? '#333' : '#eee', padding: '20px' }}>
    </div>
  );
};





const TextInput = () => {
  const inputRef = useRef(null);

  const handleInputChange = () => {
    const inputValue = inputRef.current.value;
    setLabelText(inputValue);
  };

  const handleClearButtonClick = () => {
    inputRef.current.value = '';
    setLabelText('');
  };

  const [labelText, setLabelText] = useState('');

  return (
    <div>
      <label>Введенный текст: {labelText}</label>
      <br />
      <input type="text" ref={inputRef} onChange={handleInputChange} />
      <button onClick={handleClearButtonClick}>Очистить</button>
    </div>
  );
};



const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Header />
        <Content />
        <h1>Text Input App</h1>
        <TextInput />
      </div>
    </ThemeProvider>
  );
};

export default App;