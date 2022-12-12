import React from 'react'
import { categories } from '../constants'
import fetchNews from '../lib/fetchNews';
import NewsList from './NewsList'

async function Homepage() {
  const newsData: NewsResponse = await fetchNews(categories.join(','))

  return (
    <div>
      <NewsList news={newsData}/>
    </div>
  )
}

export default Homepage