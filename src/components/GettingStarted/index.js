import React, { useState } from 'react'
import { Header } from '../Header'
import { Table } from '../Table'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export const GettingStarted = () => {
  const [tag, setTag] = useState('general')

  const changeTag = (e) => setTag(e)

  return (
    <div>
      <Header title='Getting Started' hideTags />
      <div className='usecases'>
        <h1> How to install </h1>
        <p>For npm users</p>
        <SyntaxHighlighter language='jsx' style={monokai}>
          {`$ npm install react-neon-ui styled-components`}
        </SyntaxHighlighter>
        <p>For yarn users</p>
        <SyntaxHighlighter language='jsx' style={monokai}>
          {`$ yarn add react-neon-ui styled-components`}
        </SyntaxHighlighter>
        <h1> Example </h1>
        <SyntaxHighlighter language='jsx' style={monokai}>
          {`
          import React from 'react'
          import { Buttom } from 'react-neon-ui'

          const App = () => (
            <div>
              <Button>Click Here</Button>
            </div>
          )

          export default App
          `}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}
