import {
  NextApiRequest,
  NextApiResponse
} from '../../node_modules/next/dist/shared/lib/utils'

const handler = async (
  _req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const today = new Date().toISOString().slice(0, 10)

  const groupBy = (items: any[], key: string) =>
    items.reduce(
      (
        result: { [x: string]: any },
        item: { [x: string]: string | number }
      ) => ({
        ...result,
        [item[key]]: [...(result[item[key]] || []), item]
      }),
      {}
    )

  try {
    const res_1 = await fetch(
      `${process.env.API_BASE_URL}/search?page-size=50&show-fields=headline,` +
        `trailText,thumbnail&from-date=${today}&to-date=${today}&order-by=relevance` +
        `&use-date=newspaper-edition&api-key=${process.env.API_KEY}`
    )
    let data = await res_1.json()

    // sort by sections and reverse the array
    data = data.response.results
      .sort((a: { sectionId: number }, b: { sectionId: number }) =>
        a.sectionId > b.sectionId ? 1 : -1
      )
      .reverse()
    // return results grouped by sections
    res.status(200).json(groupBy(data, 'sectionName'))
  } catch (error) {
    res.status(error.status).json(error.response.data)
  }
}

export default handler
