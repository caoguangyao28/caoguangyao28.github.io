import React from "react"
import { graphql,Link } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Amazing Codes
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link 
              to={node.fields.slug}
              css={css`
              text-decoration:none;
              color: inherit;
              `}
              >
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              {node.frontmatter.title}{" "}
              <span
                css={css`
                  color: #196727;
                `}
              >
                — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {id: {ne: "about-me"}}}) {
      totalCount
      pageInfo {
        currentPage
      }
      edges {
        node {
          id
          excerpt(pruneLength: 50)
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
            id
          }
          fields {
            slug
          }
        }
      }
    }
  }
`