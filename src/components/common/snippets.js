export const ButtonSnippets = {
  variants: `
  import { Button } from 'react-neon-ui'

  <Button variant='primary'> Primary </Button>
  <Button variant='secondary'> Secondary </Button>
  `,
  sizes: `
  import { Button } from 'react-neon-ui'

  <Button size='small'>Small</Button>
  <Button size='medium'>Medium</Button>
  <Button size='large'>Large</Button>
  `
}

export const NumberInputSnippets = {
  variants: `
  import { NumberInput } from 'react-neon-ui'

  <TextInput variant='primary' placeholder='Primary'/>
  <TextInput variant='secondary' placeholder='Secondary'/>
  `,
  sizes: `
  import { NumberInput } from 'react-neon-ui'

  <TextInput size='small' placeholder="Small"/>
  <TextInput size='medium' placeholder="Medium"/>
  <TextInput size='large' placeholder="Large"/>
  `,
  formatted: `
  import { NumberInput } from 'react-neon-ui'

  <TextInput />
  <TextInput formatted="number" />
  <TextInput formatted="currency" />
  `,
  controlled: `
  import React, { useState } from "react";
  import "./App.css";
  import { NumberInput } from "react-neon-ui";

  function App() {
    const [number, setNumber] = useState("");

    const handleChange = (e) => {
      setNumber(e.target.value);
    };

    return (
      <div className="App">
        <NumberInput
          value={number}
          onChange={handleChange}
        />
      </div>
    );
  }

  export default App;
  `,
  uncontrolled: `
  import React, { useRef, useState } from "react";
  import "./App.css";
  import { NumberInput } from "react-neon-ui";
  
  
  function App() {
    const inputRef = useRef(null);
  
    const handleRef = () => {
      alert(inputRef.current.value);
    };
  
    return (
      <div className="App">
        <Button onClick={handleRef}>Show Ref</Button>
        <NumberInput
          ref={inputRef}       
        />
      </div>
    );
  }
  
  export default App;
  `
}

export const TextInputSnippets = {
  variants: `
  import { TextInput } from 'react-neon-ui'

  <TextInput variant='primary' placeholder='Primary'/>
  <TextInput variant='secondary' placeholder='Secondary'/>
  `,
  sizes: `
  import { TextInput } from 'react-neon-ui'

  <TextInput size='small' placeholder="Small"/>
  <TextInput size='medium' placeholder="Medium"/>
  <TextInput size='large' placeholder="Large"/>
  `,
  controlled: `
  import React, { useState } from "react";
  import "./App.css";
  import { TextInput } from "react-neon-ui";

  function App() {
    const [text, setText] = useState("");

    const handleChange = (e) => {
      setText(e.target.value);
    };

    return (
      <div className="App">
        <TextInput
          value={text}
          onChange={handleChange}
        />
      </div>
    );
  }

  export default App;
  `,
  uncontrolled: `
  import React, { useRef, useState } from "react";
  import "./App.css";
  import { TextInput } from "react-neon-ui";
  
  
  function App() {
    const inputRef = useRef(null);
  
    const handleRef = () => {
      alert(inputRef.current.value);
    };
  
    return (
      <div className="App">
        <Button onClick={handleRef}>Show Ref</Button>
        <TextInput
          ref={inputRef}       
        />
      </div>
    );
  }
  
  export default App;
  `
}

export const SelectSnippets = {
  variants: `
  import { Select } from 'react-neon-ui'

  <Select
    variant='primary'
    label='Select variant'
    options={['primary', 'secondary']}
  />
  <Select
    variant='secondary'
    label='Select variant'
    options={['primary', 'secondary']}
  />
  `,
  sizes: `
  import { Select } from 'react-neon-ui'
  
  <Select
    size='small'
    label='small'
    options={['small', 'medium', 'large']}
  />
  <Select
    size='medium'
    label='medium'
    options={['small', 'medium', 'large']}
  />
  <Select
    size='large'
    label='large'
    options={['small', 'medium', 'large']}
  />
  `,
  multiselect: `
  import { Select } from 'react-neon-ui'
  
  <Select
    label='Multi Select'
    options={['primary', 'secondary']}
  multiple
  />
  <Select
    label='Single Select'
    options={['primary', 'secondary']}
  />
  `
}

export const AutocompleteSnippets = {
  variants: `
  import { Select } from 'react-neon-ui'

  const colors = ['blue','red','yellow','green','black','white]
  
  <Autocomplete variant='primary' suggestions={colors} />
  <Autocomplete variant='secondary' suggestions={colors} />
  `,
  sizes: `
  import { Select } from 'react-neon-ui'

  const colors = ['blue','red','yellow','green','black','white]

  <Autocomplete size='small' suggestions={colors} />
  <Autocomplete size='medium' suggestions={colors} />
  <Autocomplete size='large' suggestions={colors} />
  `
}

export const ThemeSnippets = {
  changeTheme: `
  import React from 'react';
  import ReactDOM from 'react-dom';
  import { ThemeProvider } from 'styled-components';
  import { cyberpunk } from 'react-neon-ui';
  import { neon } from 'react-neon-ui';
  
  
  ReactDOM.render(
      <ThemeProvider theme={cyberpunk}> 
        ...your app content
      </ThemeProvider>,
    document.getElementById('root'),
  );
  `,
  themeTemplate: `
  export const customTheme = {
    textcolor: {
      primary: {
        on: '#FF124F',
        off: '#939393',
        blur: '#FF124F'
      },
      secondary: {
        on: '#1afe49',
        off: '#939393',
        blur: '#1afe49'
      }
    },
    bordercolor: {
      primary: {
        on: '#FF00A0',
        off: '#FF72CA',
        blur: '#FF00A0'
      },
      secondary: {
        on: '#3d43b4',
        off: '#8386f5',
        blur: '#3d43b4'
      }
    },
    fontFamily: {
      name: 'monoton'
    }
  }  
  `,
  customTheme: `
  import React from 'react';
  import ReactDOM from 'react-dom';
  import { ThemeProvider } from 'styled-components';
  import { customTheme } from '../customTheme';


  ReactDOM.render(
      <ThemeProvider theme={customTheme}> 
        ...your app content
      </ThemeProvider>,
    document.getElementById('root'),
  );
  `
}
