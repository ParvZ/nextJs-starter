import React from 'react'
import ReadMoreBtn from './ReadMoreBtn'

type Props = {
    article: Article
}

function Article({article}: Props) {
    const defaultImg= "https://nayemdevs.com/wp-content/uploads/elementor/thumbs/header-11-1210x423-1-omp3haxyyjccgec7vfpp83l5lmyv4zgj62z0siflag.jpg"
  return (
    <div>
        {article.image?
            <img src={article.image} alt={article.title} />
        :
            <img src={defaultImg} alt={article.title} />
        }
            <div>
                <h2>{article.title}</h2>
                <span>{article.category.toLocaleUpperCase()}</span>
            </div>
            
            <ReadMoreBtn article={article}/>
    </div>

  )
}

export default Article