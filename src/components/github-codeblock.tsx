import React, { useEffect, useState, lazy } from 'react';
import CodeBlock from '@theme/CodeBlock';
import Details from '@theme/MDXComponents/Details';

export default function GithubCodeBlock(props: { url: string, language: string, title?: string }) {
  const { url, language, title = "" } = props;

  const [content, setContent] = useState("")

  const fetchContent = () => {
    fetch(url)
      .then(response => {
        return response.text()
      })
      .then(data => {
        setContent(data)
      })
  }

  useEffect(() => {
    fetchContent()
  }, [])

  return (
    <div>
      <CodeBlock
        language={language}
        title={title}
        showLineNumbers>
        {content}
      </CodeBlock>
    </div>
  )
}


export function CollapseGithubCodeBlock(props: { url: string, language: string, title?: string }) {
  const { url, language, title = "" } = props;

  return (
    <Details>
      <summary mdxType="summary">{title}</summary>

      <GithubCodeBlock url={url} language={language}/>

    </Details>
  )
}