


export default function Post ({post}) {
  

  return(
    <>
      <h2>{post.id} {post.title}</h2>
      <p>{post.body}</p>
    </>
  )
}

export async function getStaticPaths() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()

  const paths = data.map(post => {
    return{
      params:{
        postId: `${post.id}`,
      }
    }
  })
  return {
   paths: [
     {
       params: {postId: '1'}
     },
   ],
    // paths,
    fallback: 'blocking',
  }
 }

export async function getStaticProps (context) {
  const {params} = context;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
  const data = await response.json()

  if(!data.id) {
    return {
      notFount: true
    }
  }

  console.log(`geneting page for /posts/${params.postId}`)
  return {
    props:{
      post: data
    }
  }
}
