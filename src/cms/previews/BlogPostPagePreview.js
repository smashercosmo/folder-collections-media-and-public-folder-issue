import React from 'react'

import { Post } from '../../components/Post/Post'

function BlogPostPagePreview({
  entry,
  widgetFor,
}) {
  const title = entry.getIn(['data', 'title'])
  const cover = entry.getIn(['data', 'cover'])
  const html = widgetFor('body')

  return (
    <Post
      title={title}
      html={html}
      cover={cover}
    />
  )
}

export { BlogPostPagePreview }
