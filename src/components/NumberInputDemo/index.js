import React, { useState } from 'react'
import { NumberInput } from 'react-neon-ui'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Header } from '../Header'
import { Table } from '../Table'
import { NumberInputSnippets } from '../common/snippets'

export const NumberInputDemo = () => {
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
      Description: `choose a size`
    },
    {
      title: 'onChange',
      type: 'func',
      default: 'noop',
      Description: `funcion to call when input change`
    },
    {
      title: 'placeholder',
      type: 'string',
      default: '""',
      Description: `Add a text placeholder to the NumberInput`
    },
    {
      title: 'formatted',
      type: '"number", "currency"',
      default: 'false',
      Description: `Choose the format for the numbers`
    }
  ]

  return (
    <div>
      <Header title='NumberInput' changeTag={changeTag} />
      {tag === 'general' && (
        <Table
          title='NumberInput'
          description='Input that only receives numbers and can format thems'
          data={dataTable}
        />
      )}
      {tag === 'useCases' && (
        <div className='usecases'>
          <h1>Variants</h1>
          <NumberInput placeholder='Primary' />
          <NumberInput
            style={{ margin: '10px' }}
            variant='secondary'
            placeholder='Secondary'
          />
          <SyntaxHighlighter language='jsx' style={monokai}>
            {NumberInputSnippets.variants}
          </SyntaxHighlighter>
          <h1>Sizes</h1>
          <NumberInput
            style={{ margin: '10px' }}
            size='small'
            placeholder='Small'
          />
          <NumberInput
            style={{ margin: '10px' }}
            size='medium'
            placeholder='Medium'
          />
          <NumberInput
            style={{ margin: '10px' }}
            size='large'
            placeholder='Large'
          />
          <SyntaxHighlighter language='jsx' style={monokai}>
            {NumberInputSnippets.sizes}
          </SyntaxHighlighter>
          <h1>formatted</h1>
          <NumberInput style={{ margin: '10px' }} value='1000000' />
          <NumberInput
            style={{ margin: '10px' }}
            value='1,000,000'
            formatted='number'
          />
          <NumberInput
            style={{ margin: '10px' }}
            value='$1,000,000'
            formatted='currency'
          />
          <SyntaxHighlighter language='jsx' style={monokai}>
            {NumberInputSnippets.formatted}
          </SyntaxHighlighter>
          <h1>controlled use</h1>
          <SyntaxHighlighter language='jsx' style={monokai}>
            {NumberInputSnippets.controlled}
          </SyntaxHighlighter>
          <h1>Uncontrolled use</h1>
          <SyntaxHighlighter language='jsx' style={monokai}>
            {NumberInputSnippets.uncontrolled}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  )
}
