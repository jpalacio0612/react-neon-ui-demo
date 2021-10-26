import React, { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Divider } from 'react-neon-ui'
import { Header } from '../Header'
import { Table } from '../Table'
import { DividerSnippets } from '../common/snippets'

export const DividerDemo = () => {
  const [tag, setTag] = useState('useCases')

  const changeTag = (e) => setTag(e)

  const dataTable = [
    {
      title: 'variant',
      type: '"primary", "secondary"',
      default: 'primary',
      Description: 'Choose a variant'
    }
  ]

  return (
    <div>
      <Header title='Divider' changeTag={changeTag} />
      {tag === 'general' && (
        <Table
          title='Divider'
          description='Styled Horizontal line'
          data={dataTable}
        />
      )}
      {tag === 'useCases' && (
        <div className='usecases'>
          <h1>Variants</h1>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <h2 style={{ textAlign: 'center', color: '#939393' }}>Primary</h2>
            <Divider variant='primary' style={{ width: '50%' }} />
            <h2 style={{ textAlign: 'center', color: '#939393' }}>Secondary</h2>
            <Divider variant='secondary' style={{ width: '50%' }} />
          </div>
          <SyntaxHighlighter language='jsx' style={monokai}>
            {DividerSnippets.variants}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  )
}
