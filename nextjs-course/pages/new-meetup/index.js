import React, { useRef } from 'react'
import { useRouter } from 'next/router'

const NewsPage = () => {
  const title = useRef()
  const router = useRouter()

  const onAddMeetupHandler = async (event) => {
    await fetch('/api/new-meetup', {
      method: "POST",
      body: JSON.stringify({
        title: title.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    // Navigate to home page after adding new meetup
    router.push('/')
  }

  return (
    <>
      <h1>The New Meetup Page</h1>
      <div>
        <input type='text' name='title' ref={title} />
        <button onClick={onAddMeetupHandler}>Add new meetup</button>
      </div>
    </>
  )
}

export default NewsPage