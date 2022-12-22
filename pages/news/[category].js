export default function ArticleListByCategory ({articles, category}) {
  return(
    <>
      <h1>Showing news for caregory <i>{category}</i></h1>
      {
        articles.map(article => {
          return(
            <div key={article.id}>
              <h2>{article.id} {article.title}</h2>
              <p>{article.description}</p>
            </div>
          )
        })
      }
    </>  
  )

}


export async function getServerSideProps (context) {
  const {params, req, res, query} = context;
  console.log(req.headers.cookie)
  console.log(query)
  res.setHeader('Set-Cookie',['name=jeejy'])
  const {category} = params
  const response = await fetch(`http://localhost:4000/news?category=${category}`)
  const data = await response.json()
  console.log(`Pre-rendering News Articles for category ${category}`)

  return {
    props: {
      articles: data, 
      category,
    },
  }
}