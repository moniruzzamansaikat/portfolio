import React from 'react'
import { Link } from 'react-router-dom'
import './BlogItem.css'

function BlogItem() {
  return (
    <div className="blog_item">
      <h2>
        <Link to={'/blog/*'}>How to install laravel</Link>
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Quae veritatis neque magnam aperiam dolorem,
        corrupti officiis praesentium porro incidunt
        accusantium reprehenderit? Magni soluta saepe ut
        atque reprehenderit consequuntur facere blanditiis!
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Facilis, omnis saepe. Accusamus neque,
        deserunt rem mollitia molestias dolore consequatur
        harum?
      </p>

      <div>
        <Link className="btn text-white" to={'/blog/*'}>
          Read More
        </Link>
      </div>
    </div>
  )
}

export default BlogItem
