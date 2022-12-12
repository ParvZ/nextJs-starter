import { gql, GraphQLClient } from "graphql-request";

const fetchNews = async (category?: Category | string, keywords?: string, isDynamic?: boolean )=> {
    const Posts_Query = gql`
    query MyQuery(
        $access_key: String!
        $categories: String!
        $keywords: String 
    ) {
        myQuery(
          access_key: $access_key
          categories: $categories
          keywords: $keywords
          countries: "us"
          limit: "5"
          sort: "published_desc"
        ) {
          data {
            title
            image
            description
            category
            country
          }
          pagination {
            count
            limit
            offset
            total
          }
        }
      }
    `
    const endpoint = "https://meridian.stepzen.net/api/dozing-zebu/__graphql"

    // const res = await fetch(endpoint, {
    //   method: 'post',
    //   cache: isDynamic ? 'no-cache' : 'default',
    //   next: isDynamic ? { revalidate: 0} : { revalidate: 20 },
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Apikey ${process.env.STEPZEN_API}`,
    //   },
    //   body: JSON.stringify({
    //     Posts_Query,
    //     variables: {
    //         // access_key: process.env.API_KEY,
    //         categories: category,
    //         keywords: keywords
    //     }
    //   })
    // })

    console.log(
        "Loading from API",
        category,
        keywords
    );

    const graphqlClient = new GraphQLClient(endpoint, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Apikey ${process.env.STEPZEN_API}`,
        }
    })

    const data = await graphqlClient.request(Posts_Query, {
        access_key: process.env.API_KEY,
        categories: category,
        keywords: keywords
    })
 
    return data.myQuery;
    
}



export default fetchNews;


// stepzen import curl "http://api.mediastack.com/v1/news?access_key=27d0761c63a5bc05d3c926d090922b93&sources=general,sports"
// stepzen import curl "http://api.mediastack.com/v1/news?access_key=27d0761c63a5bc05d3c926d090922b93&countries=gb,us,de&limit=100&offset=0&sort=published_desc"