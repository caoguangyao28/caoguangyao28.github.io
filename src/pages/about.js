import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>{data.site.siteMetadata.title}</h1>
    <p>
      We're the only site running on your computer dedicated to showing the best
      photos and videos of pandas eating lots of food.
    </p>
  </Layout>
)
//page query 页面查询使用 数据自动 映射到 data
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`