import React, { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { TextInputSnippets } from '../common/snippets'
import { Header } from '../Header'
import { Table } from '../Table'
import { TextInput } from 'react-neon-ui'

export const TextInputDemo = () => {
  const [tag, setTag] = useState('useCases')

  const changeTag = (e) => setTag(e)

  const dataTable = [
    {
      title: 'variant',
      type: '"primary","secondary"',
      default: 'primary',
      Description: 'Choose a variant'
    },
    {
      title: 'size',
      type: '"small","medium","large"',
      default: 'medium',
      Description: `Choose a size`
    },
    {
      title: 'onChange',
      type: 'func',
      default: 'noop',
      Description: `funcion to call when input changes`
    },
    {
      title: 'placeholder',
      type: 'string',
      default: '""',
      Description: `Add a text placeholder to the textInput`
    }
  ]

  return (
    <div>
      <Header title='TextInput' changeTag={changeTag} />
      {tag === 'general' && (
        <Table
          title='TextInput'
          description='It is used to create interactive controls for web-based forms to receive user data.'
          data={dataTable}
        />
      )}
      {tag === 'useCases' && (
        <div className='usecases'>
          <h1>Variants</h1>
          <TextInput placeholder='Primary' />
          <TextInput
            style={{ margin: '10px' }}
            variant='secondary'
            placeholder='Secondary'
          />
          <SyntaxHighlighter language='jsx' style={monokai}>
            {TextInputSnippets.variants}
          </SyntaxHighlighter>
          <h1>Sizes</h1>
          <TextInput
            style={{ margin: '10px' }}
            size='small'
            placeholder='Small'
          />
          <TextInput
            style={{ margin: '10px' }}
            size='medium'
            placeholder='Medium'
          />
          <TextInput
            style={{ margin: '10px' }}
            size='large'
            placeholder='Large'
          />
          <SyntaxHighlighter language='jsx' style={monokai}>
            {TextInputSnippets.sizes}
          </SyntaxHighlighter>
          <h1>controlled use</h1>
          <SyntaxHighlighter language='jsx' style={monokai}>
            {TextInputSnippets.controlled}
          </SyntaxHighlighter>
          <h1>Uncontrolled use</h1>
          <SyntaxHighlighter language='jsx' style={monokai}>
            {TextInputSnippets.uncontrolled}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  )
}
