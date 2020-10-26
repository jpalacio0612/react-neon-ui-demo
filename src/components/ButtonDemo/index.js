import React, { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Button } from 'react-neon-ui'
import { Header } from '../Header'
import { Table } from '../Table'
import { ButtonSnippets } from '../common/snippets'

export const ButtonDemo = () => {
  const [tag, setTag] = useState('general')

  const changeTag = (e) => setTag(e)

  const dataTable = [
    {
      title: 'variant',
      type: 'string',
      default: 'primary',
      Description: 'primary, secondary'
    },
    {
      title: 'size',
      type: 'string',
      default: 'medium',
      Description: `'small','medium','large'`
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
          description='Buttons communicate the action that will occur when the user touches them.'
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
