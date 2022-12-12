import { notFound } from "next/navigation"

type Props = {
    searchParams: Article
}

const ArticlePage = ({ searchParams }: Props) => {

    if( (searchParams && Object.entries(searchParams).length === 0) || !searchParams )
    return notFound()

    const article: Article = searchParams
    
  return (
    <article>
        <section>
            {article.image &&
                <img className="h-250" src={article.image} alt={article.title} />

            }
        </section>
    </article>
  )
}

export default ArticlePage