import React, { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Button } from 'react-neon-ui'
import { Header } from '../Header'
import { Table } from '../Table'
import { ButtonSnippets } from '../common/snippets'

export const ButtonDemo = () => {
  const [tag, setTag] = useState('useCases')

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
      title: 'onClick',
      type: 'func',
      default: 'noop',
      Description: `funcion to call when button press`
    },
    {
      title: 'disable',
      type: 'bool',
      default: 'false',
      Description: `Set disable to true if interaction with button isn't available to user`
    }
  ]

  return (
    <div>
      <Header title='Button' changeTag={changeTag} />
      {tag === 'general' && (
        <Table
          title='Button'
          description='Represent a clickable button element that triggers an event'
          data={dataTable}
        />
      )}
      {tag === 'useCases' && (
        <div className='usecases'>
          <h1>Variants</h1>
          <Button>Primary</Button>
          <Button style={{ margin: '0 10px' }} variant='secondary'>
            secondary
          </Button>
          <SyntaxHighlighter language='jsx' style={monokai}>
            {ButtonSnippets.variants}
          </SyntaxHighlighter>
          <h1>Sizes</h1>
          <Button style={{ margin: '0 10px' }} size='small'>
            Small
          </Button>
          <Button style={{ margin: '0 10px' }} size='medium'>
            medium
          </Button>
          <Button style={{ margin: '0 10px' }} size='large'>
            large
          </Button>
          <SyntaxHighlighter language='jsx' style={monokai}>
            {ButtonSnippets.sizes}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  )
}
