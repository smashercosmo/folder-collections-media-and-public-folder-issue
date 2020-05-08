import React from 'react'
import { graphql } from 'gatsby'
import { Post } from '../components/Post/Post'

export const query = graphql`
  query BlogPostPage($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        cover {
          publicURL
        }
      }
      html
    }
  }
`

export default (props) => {
  const { data } = props
  const {
    frontmatter: { title, cover },
    html,
  } = data.post
  return <Post title={title} html={html} cover={cover.publicURL} />
}
