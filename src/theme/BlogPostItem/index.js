import React from 'react'
import BlogPostItem from '@theme-original/BlogPostItem'
import Giscus from '../../components/Giscus'
import OldPostNotice from '../../components/OldPostNotice'

export default function BlogPostItemWrapper(props) {
  return (
    <>
      <OldPostNotice {...props} />
      <BlogPostItem {...props} />
      <Giscus />
    </>
  )
}
