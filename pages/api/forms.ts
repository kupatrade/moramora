import type { NextApiRequest, NextApiResponse } from 'next'
import { CreateTextEmailData } from '@/interfaces/interface'
import { form_email } from '@/handlers/form_email'

type Data = {
  mess: string
}
interface MyRequest extends NextApiRequest {
  body: CreateTextEmailData
}

export default async function handler(
  req: MyRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    try {
      const body = req.body
      await form_email(body)
      res.status(200).json({ mess: 'Message sent' })
    } catch (e) {
      res.status(500).json({ mess: 'Send message...' })
      console.log("Send message: ", e)
    }
  } else {
    res.status(500).json({ mess: 'unavailable method' })
  }
}
