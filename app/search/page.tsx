import fetchNews from '../../lib/fetchNews'
import  NewsList from '../NewsList'

type Props = {
    searchParams?: {
        term: string
    } 
}

const SearchPage = async ({ searchParams }: Props) => {
    const news: NewsResponse = await fetchNews("general, sports", searchParams?.term)
    console.log(searchParams?.term);

    
  return (
    <NewsList news={news}/>
  )
}

export default SearchPage