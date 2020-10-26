import React from 'react'
import { Header } from '../Header'
import { ThemeSnippets } from '../common/snippets'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export const Theming = () => {
  return (
    <div>
      <Header title='Theming' hideTags />
      <div className='usecases'>
        <h1> How to switch between themes </h1>
        <p>
          React Neon UI is based on styled-components so we have access to the
          use of themes, by default we have two themes: neon and cyberpunk,
          themes styled-components has full theming support by exporting a
          ThemeProvider wrapper component. This component provides a theme to
          all React components underneath itself via the context API. In the
          render tree all styled-components will have access to the provided
          theme, even when they are multiple levels deep.
        </p>
        <SyntaxHighlighter language='jsx' style={monokai}>
          {ThemeSnippets.changeTheme}
        </SyntaxHighlighter>
        <h1>How to make an custom theme</h1>
        <p>
          To make a custom theme you must pass a javascript object to the
          themeprovider based on the template below, modifying the colors or
          fonts you want.
        </p>
        <SyntaxHighlighter language='jsx' style={monokai}>
          {ThemeSnippets.themeTemplate}
        </SyntaxHighlighter>
        <p>Now you just have to pass the custom theme to the provider</p>
        <SyntaxHighlighter language='jsx' style={monokai}>
          {ThemeSnippets.customTheme}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}
