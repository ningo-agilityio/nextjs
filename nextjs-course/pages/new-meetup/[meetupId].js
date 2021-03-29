import React from 'react'
import { useRouter } from 'next/router'
import { DUMMY_MEETUPS } from '../../constants/data'
import Head from 'next/head'

// news/1

const DetailPage = ({ meetupDetail }) => { 
  // const router = useRouter()
  // const newsId = router.query.newsId

  // TODO: Fetch data base on newsId
  return (
    <>
      <Head>
        <title>{meetupDetail.description}</title>
      </Head>
      <h1>The News Detail Page { meetupDetail.id } </h1>
      <img src={meetupDetail.thumb} alt={meetupDetail.id}/>
      <p>{meetupDetail.description}</p>
    </>
  )
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: DUMMY_MEETUPS.map(item => ({
      params: {
        meetupId: item.id
      }
    }))
  }
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId

  // fetch data from an API
  return {
    props: {
      meetupDetail: {
        id: meetupId,
        thumb: "https://via.placeholder.com/150",
        description: "Lorem isum"
      }
    },
    revalidate: 1
  }
}

export default DetailPage