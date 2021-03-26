import React from 'react'
import { useRouter } from 'next/router'
// news/1

const DetailPage = () => { 
  const router = useRouter()
  const newsId =  router.query.newsId

  // TODO: Fetch data base on newsId
  return (
    <h1>The News Detail Page { newsId } </h1>
  )
}

export default DetailPage