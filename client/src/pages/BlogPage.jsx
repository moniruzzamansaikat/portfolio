import React from 'react'
import Helmet from 'react-helmet'
import '../styles/BlogPage.css'

function BlogPage() {
  return (
    <div className="blog_page pt-5">
      <Helmet>
        <title>Blog</title>
        <meta
          name="description"
          content="List of projects built by Moniruzzaman Saikat."
        />
        <meta
          name="keywords"
          content="web development, web design, programming , saikim, saikat, moniruzzaman saikat, moniruzzamansaikat, freelance web developer, freelance web programmer, "
        />
      </Helmet>
      <div className="container mt-5">
        <h1 className="text-center mt-4">
          Blog is coming soon :)
        </h1>
      </div>
    </div>
  )
}

export default BlogPage
