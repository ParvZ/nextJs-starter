'use client'

import { useRouter } from 'next/navigation'

type Props = {
    article: Article
}

function ReadMoreBtn({article}: Props) {

  const router = useRouter()    

  const handleClick = ()=> {
    const queryStr = Object.entries(article).map(([key, value]) => `${key}=${value}`).join('&')
    console.log(queryStr);
    const url = `/article?${queryStr}`
    router.push(url)
  }

  return (
    <button className='bg-slate-700 rounded-full py-2 px-5' onClick={handleClick}>Read more</button>
  )
}

export default ReadMoreBtn