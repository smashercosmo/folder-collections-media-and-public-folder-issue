import React from 'react'

function Content(props) {
  const { children } = props

  if (typeof children === 'string') {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: children }}
      />
    )
  }

  return <div>{children}</div>
}

export { Content }
