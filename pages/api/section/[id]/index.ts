import {
  NextApiRequest,
  NextApiResponse
} from '../../../../node_modules/next/dist/shared/lib/utils'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const id = req.query.id as string
  const today = new Date().toISOString().slice(0, 10)

  try {
    const res_1 = await fetch(
      `${process.env.API_BASE_URL}/search?section=${id}&page-size=50&show-fields=headline,` +
        `trailText,thumbnail&from-date=${today}&to-date=${today}&order-by=relevance` +
        `&use-date=newspaper-edition&show-elements=all&api-key=${process.env.API_KEY}`
    )
    const data = await res_1.json()
    res.status(200).json(data)
  } catch (error) {
    res.status(error.status).json(error.response.data)
  }
}

export default handler
