import React, { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { TextInputSnippets } from '../common/snippets'
import { Header } from '../Header'
import { Table } from '../Table'
import { TextArea } from 'react-neon-ui'

export const TextAreaDemo = () => {
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
      Description: `Add a text placeholder to the TextArea`
    }
  ]

  return (
    <div>
      <Header title='TextArea' changeTag={changeTag} />
      {tag === 'general' && (
        <Table
          title='TextArea'
          description='It is used to create interactive controls for web-based forms to receive user data.'
          data={dataTable}
        />
      )}
      {tag === 'useCases' && (
        <div className='usecases'>
          <h1>Variants</h1>
          <TextArea placeholder='Primary' />
          <TextArea
            style={{ margin: '10px' }}
            variant='secondary'
            placeholder='Secondary'
          />
          <SyntaxHighlighter language='jsx' style={monokai}>
            {TextInputSnippets.variants}
          </SyntaxHighlighter>
          <h1>Sizes</h1>
          <TextArea
            style={{ margin: '10px' }}
            size='small'
            placeholder='Small'
          />
          <TextArea
            style={{ margin: '10px' }}
            size='medium'
            placeholder='Medium'
          />
          <TextArea
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
