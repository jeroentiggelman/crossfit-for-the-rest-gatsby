import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"

export const data = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`

const blogPost = ({ data }) => {
  return (
    <Layout>
      <h1>{data.mdx.frontmatter.title}</h1>
      <p>Written by: {data.mdx.frontmatter.author}</p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      <Link to="/">&larr; Back to Home</Link>
    </Layout>
  )
}

export default blogPost
