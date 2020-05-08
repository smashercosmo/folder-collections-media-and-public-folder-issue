const path = require('path')
const { registerLocalFs } = require('netlify-cms-proxy-server/dist/middlewares')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateDevServer = async ({ app }) => {
  await registerLocalFs(app)
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const { createNodeField } = actions
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`src/templates/post.js`)
  const result = await graphql(`
    query PostsList {
      allMarkdownRemark(limit: 1000) {
        posts: nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const { posts } = result.data.allMarkdownRemark

  posts.forEach((post) => {
    createPage({
      path: `/blog${post.fields.slug}`,
      component: blogPost,
      context: {
        id: post.id,
      },
    })
  })
}
