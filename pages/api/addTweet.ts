// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { TweetBody } from '../../typings'

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const data: TweetBody = JSON.parse(req.body);
//2.54
    const mutations = {
        mutations: [
            {
                create: {
                    _type: 'tweet',
                    text: data.text,
                    username: data.username,
                    blockTweet: false,
                    profileImg: data.profileImg,
                    Image: data.image,

                }
            }
        ]
    }

    const apiEndpoint = `http://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`
    const result = await fetch(apiEndpoint, {
        headers:{
            'content-type': 'application/json',
            Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`
        },
        body: JSON.stringify(mutations),
        method: 'POST'
    })

    const json = await result.json();
  res.status(200).json({ message: 'Added!' })
}
