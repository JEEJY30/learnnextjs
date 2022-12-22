import Link from "next/link"


export default function ProductList({products}) {
return(
  <>
    <h1>List of product</h1>
    {
      products.map(product => {
        return(
          <div key={product.id}>
            <Link href={`products/${product.id}`}>
              <h2>{product.id} {product.title} {product.price}</h2>
            </Link>
            <hr />
          </div>
        )
      })
    }
  </>
)
}



export async function getStaticProps() {
  console.log('ganerating')
  const response = await fetch('http://localhost:4000/products')
  const data = await response.json()

  return {
    props: {
      products: data
    },
    revalidate: 10
  }
}