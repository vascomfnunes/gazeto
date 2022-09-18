import { Data } from 'lib/interfaces/api'
import {
  NextApiRequest,
  NextApiResponse
} from 'node_modules/next/dist/shared/lib/utils'

const handler = async (
  _req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const today = new Date().toISOString().slice(0, 10)

  const sections = [
    'uk-news',
    'world',
    'us-news',
    'theguardian',
    'theobserver',
    'tv-and-radio',
    'media',
    'football',
    'sport',
    'technology',
    'culture',
    'music',
    'film',
    'stage',
    'books',
    'games',
    'artanddesign',
    'travel',
    'lifeandstyle',
    'money',
    'business',
    'community',
    'education',
    'environment',
    'fashion',
    'food',
    'global-development',
    'law',
    'local',
    'politics',
    'science',
    'society',
    'commentisfree',
    'extra',
    'about',
  ]

  try {
    let finalData = []

    // Fetch articles for each section
    for (let index = 0; index < sections.length; index++) {
      let res_2 = await fetch(
        `${process.env.API_BASE_URL}/search?page-size=7&section=${sections[index]}&show-fields=headline,` +
          `trailText,thumbnail&from-date=${today}&to-date=${today}&order-by=relevance` +
          `&use-date=newspaper-edition&api-key=${process.env.API_KEY}`
      )

      let response: Data = await res_2.json()

      if (response.response.results.length > 0) {
        response = response.response.results
          .sort(
            (
              a: { webPublicationDate: string },
              b: { webPublicationDate: string }
            ): 1 | -1 => (a.webPublicationDate > b.webPublicationDate ? 1 : -1)
          )
          .reverse()

        finalData.push(response)
      }
    }
    res.setHeader('Cache-Control', 's-maxage=7200')
    res.status(200).json(finalData)
  } catch (error) {
    res.status(error.status).json(error.message)
  }
}

export default handler
