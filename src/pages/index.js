import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"

const BlogPreview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "banner.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      allMdx {
        nodes {
          frontmatter {
            title
            author
            slug
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundImage
        Tag="header"
        fluid={data.file.childImageSharp.fluid}
        style={{ height: "40vh" }}
      />
      <BlogPreview>
        <h2>Blog Posts</h2>
        {data.allMdx.nodes.map(post => (
          <h3>
            <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
          </h3>
        ))}
      </BlogPreview>
    </Layout>
  )
}

export default IndexPage
