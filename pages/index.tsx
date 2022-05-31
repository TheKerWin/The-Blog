import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const posts = [
    {title: 'React Testing', excerpt: 'Learn React Testing'},
    {title: 'React with Tailwind', excerpt: 'Learn React Testing'},

]

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Psuedo Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className= 'grid grid-col-1 lg:grid-col-12 gap-12'>
        {posts.map((post, index) => (
          <div>
            {post.title}
            {post.excerpt}
          </div>
        ))}
      </div> 

      
    </div>
  )
}

export default Home
