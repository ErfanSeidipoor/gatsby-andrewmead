
const path = require('path')

exports.onCreateNode = ({ node, actions }) => {
    const { createNode, createNodeField } = actions


    if (node.internal.type === "MarkdownRemark") {

        const slug = path.basename(node.fileAbsolutePath, '.md')


        createNodeField({
            node,
            name: 'slug',
            value: slug
        })

        // console.log(JSON.stringify(node,undefined , 4)) 
    }
  }

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`src/templates/blog/index.js`)
    const response = await graphql(`
        {
        allSite {
            edges {
            node {
                id
            }
            }
        }
        allMarkdownRemark {
            nodes {
            html
            id
            fields {
                slug
            }
            frontmatter {
                data
                title
            }
            }
        }
        }
    `)


    // console.log("allMarkdownRemark > ")
    // console.log(JSON.stringify(response.data.allMarkdownRemark.nodes, undefined, 4) )

    response.data.allMarkdownRemark.nodes.map( node => 
        createPage({
            // Path for this page — required
            path: `blog/${node.fields.slug}`,
            component: blogPostTemplate,
            context: {
              post:node,
              slug: node.fields.slug
            },
        })    
    )
}