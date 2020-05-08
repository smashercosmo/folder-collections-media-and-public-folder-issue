import React from 'react'
import { Content } from '../Content/Content'

export function Post(props) {
  const { title, cover, html } = props
  return (
    <div>
      <h1>{title}</h1>
      <img src={cover} alt=""/>
      <Content>{html}</Content>
    </div>
  )
}
