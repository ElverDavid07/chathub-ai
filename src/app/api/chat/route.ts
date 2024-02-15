import { OpenAIStream, StreamingTextResponse } from 'ai'
import { Configuration, OpenAIApi } from 'openai-edge'

export async function POST(request: Request) {
	try {
		const config = new Configuration({
			apiKey: process.env.OPENAI_API_KEY,
		})
		const openai = new OpenAIApi(config)

		const { messages } = await request.json()
		const response = await openai.createChatCompletion({
			model: 'gpt-3.5-turbo',
			stream: true,
			messages,
		})

		const stream = OpenAIStream(response, {
			onCompletion: () => {
				console.log('completion')
			},
		})
		return new StreamingTextResponse(stream)
	} catch (error) {
		console.error(error)
	}
}
