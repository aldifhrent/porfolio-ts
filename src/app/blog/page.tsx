import Header from '@/components/Header'
import React from 'react'
import Blog from '@/components/blog/Blog'
type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <Header/>
        <Blog/>
    </div>
  )
}

export default page