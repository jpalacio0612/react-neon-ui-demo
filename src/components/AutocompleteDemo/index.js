import React, { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Autocomplete } from 'react-neon-ui'
import { Header } from '../Header'
import { Table } from '../Table'
import { top100Films } from '../common/mockdata'
import { AutocompleteSnippets } from '../common/snippets'

export const AutocompleteDemo = () => {
  const [tag, setTag] = useState('general')

  const changeTag = (e) => setTag(e)

  const dataTable = [
    {
      title: 'variant',
      type: '"primary", "secondary"',
      default: 'primary',
      Description: 'Choose a variant'
    },
    {
      title: 'size',
      type: '"small", "medium", "large"',
      default: 'medium',
      Description: `Choose the size`
    },
    {
      title: 'onChange',
      type: 'func',
      default: 'noop',
      Description: `funcion to call when select an option`
    },
    {
      title: 'placeholder',
      type: 'string',
      default: '""',
      Description: `Add a placeholder text`
    },
    {
      title: 'suggestions',
      type: 'array',
      default: '[]',
      Description: `Array with the suggestions for autocomplete`
    }
  ]

  return (
    <div>
      <Header title='Autocomplete' changeTag={changeTag} />
      {tag === 'general' && (
        <Table
          title='Autocomplete'
          description='Input with suggestions'
          data={dataTable}
        />
      )}
      {tag === 'useCases' && (
        <div className='usecases'>
          <h1>Variants</h1>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Autocomplete suggestions={top100Films} placeholder='Top Movies' />
            <Autocomplete
              variant='secondary'
              suggestions={top100Films}
              placeholder='Top Movies'
            />
          </div>
          <SyntaxHighlighter language='jsx' style={monokai}>
            {AutocompleteSnippets.variants}
          </SyntaxHighlighter>
          <h1>Sizes</h1>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              flexWrap: 'wrap'
            }}
          >
            <Autocomplete
              size='small'
              suggestions={top100Films}
              placeholder='Top Movies'
            />
            <Autocomplete
              size='medium'
              suggestions={top100Films}
              placeholder='Top Movies'
            />
            <Autocomplete
              size='large'
              suggestions={top100Films}
              placeholder='Top Movies'
            />
          </div>
          <SyntaxHighlighter language='jsx' style={monokai}>
            {AutocompleteSnippets.sizes}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  )
}
