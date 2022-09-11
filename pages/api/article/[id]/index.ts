import { Data } from 'interfaces/api'
import {
  NextApiRequest,
  NextApiResponse
} from 'node_modules/next/dist/shared/lib/utils'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const id = req.query.id as string
  try {
    const res_1 = await fetch(
      // `${id}?show-fields=headline,trailText,body,thumbnail&show-elements=all&api-key=${process.env.API_KEY}`
      `${id}?show-fields=all&show-elements=all&api-key=${process.env.API_KEY}`
    )
    const data : Data = await res_1.json()

    res.status(200).json(data)
  } catch (error) {
    res.status(error.status).json(error.response.data)
  }
}

export default handler
