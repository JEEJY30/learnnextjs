import { useRouter } from 'next/router';


export default function Product ({product}) {
  const route = useRouter()

  if(route.isFallback) {
    return <h1>Loading...</h1>
  }
  return(
    <>
      <h2>{product.id} {product.title}</h2>
      <p>{product.description} {product.price}</p>
    </>
  )
}


export async function getStaticProps (context) {
  const {params} = context;
  console.log(params.productId)
  const response = await fetch(`http://localhost:4000/products/${params.productId}`)
  const data = await response.json()

  return {
    props:{product: data },
    revalidate: 10
  }
  
}

export async function getStaticPaths() {
  return {
    paths: [{params: {productId: '1'}}],
    fallback: true
  }
}