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
    },
    {
      title: 'orientation',
      type: '"horizontal", "vertical"',
      default: 'horizontal',
      Description: 'Choose an orientation'
    },
    {
      title: 'disabled',
      type: 'bool',
      default: 'false',
      Description: 'Set disable to true if you want to hide neon effect'
    },
    {
      title: 'thick',
      type: 'string',
      default: '1',
      Description: 'Set the thickness'
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
          <h1>Orientations</h1>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <h2 style={{ textAlign: 'center', color: '#939393' }}>
                Horizontal
              </h2>
              <Divider
                orientation='horizontal'
                style={{ width: '50%', margin: '100px' }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <h2
                style={{
                  textAlign: 'center',
                  color: '#939393',
                  marginRight: '30px'
                }}
              >
                Vertical
              </h2>
              <Divider orientation='vertical' />
            </div>
          </div>
          <SyntaxHighlighter language='jsx' style={monokai}>
            {DividerSnippets.orientations}
          </SyntaxHighlighter>
          <h1>Thickness</h1>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <h2 style={{ textAlign: 'center', color: '#939393' }}>
              thick = '2'
            </h2>
            <Divider thick='2' style={{ width: '50%' }} />
            <h2 style={{ textAlign: 'center', color: '#939393' }}>
              thick = '4'
            </h2>
            <Divider thick='4' style={{ width: '50%' }} />
          </div>
          <SyntaxHighlighter language='jsx' style={monokai}>
            {DividerSnippets.thick}
          </SyntaxHighlighter>
          <h1>Disabled</h1>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <h2 style={{ textAlign: 'center', color: '#939393' }}>
              disabled false
            </h2>
            <Divider thick='3' style={{ width: '50%' }} />
            <h2 style={{ textAlign: 'center', color: '#939393' }}>
              disabled true
            </h2>
            <Divider thick='3' style={{ width: '50%' }} disabled />
          </div>
          <SyntaxHighlighter language='jsx' style={monokai}>
            {DividerSnippets.disabled}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  )
}
