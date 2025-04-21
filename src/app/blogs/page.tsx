import React from 'react'
import Markdown from 'react-markdown'
const markdown = '# Hi, *Pluto*!'
const test = () => {
  return (
    <Markdown>{markdown}</Markdown>
  )
}

export default test