import React from 'react'
import Link from 'next/link'
import { DUMMY_MEETUPS } from '../constants/data'
import Head from 'next/head'

const HomePage = ({ meetups = [] }) => {
  return (
    <>
      <Head>
        <title>React meetups</title>
      </Head>
      <h1>MEETUPS</h1>
      <ul>
        {
          meetups.map(item => <li key={item.id}><Link href={`/new-meetup/${item.id}`}>{`${item.id} - ${item.title}`}</Link></li>)
        }
      </ul>
    </>
  )
}

// ALTERNATIVE
// Wait for page render for each request
// Data was changed frequently
// export async function getServerSideProps (context) {
//   const res = context.res
//   const req = context.req
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

// FASTER
export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 1
  }
}

export default HomePage