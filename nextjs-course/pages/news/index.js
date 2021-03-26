import React from 'react'
import Link from 'next/Link'

const NewsPage = () => (
  <>
    <h1>The News Page</h1>
    <ul>
      <li><Link href="/news/nextjs-is-a-great-framework">Nextjs is a great framework</Link></li>
      <li><Link href="/news/react-strong-js-framework">React is a strong Frontend Js framework</Link></li>
    </ul>
  </>
)

export default NewsPage