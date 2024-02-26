'use client'
import ChatList from '@/components/chat/chat-list'
import EmptyScreen from '@/components/chat/empty-screen'
import PromptForm from '@/components/chat/prompt-form'
import { useChat } from 'ai/react'
import { toast } from 'react-hot-toast'
import { ChatScrollAnchor } from './chat-scroll-anchor'

const Chat = () => {
	// Hooks

	const {
		messages,
		isLoading,
		handleInputChange,
		handleSubmit,
		input,
		stop,
		reload,
	} = useChat({
		onError(error) {
			toast.error(error.message)
		},
	})
	return (
		<section className="flex flex-col flex-1 h-full w-full items-center justify-center gap-y-1  mx-auto  px-2 md:px-0">
			{/* Section messages */}
			{messages.length ? (
				<>
					<ChatList messages={messages} isLoading={isLoading} reload={reload} />
					<ChatScrollAnchor trackVisibility={isLoading} />
				</>
			) : (
				<EmptyScreen />
			)}
			{/* Section Prompt */}
			<PromptForm
				handleInputChange={handleInputChange}
				handleSubmit={handleSubmit}
				isLoading={isLoading}
				input={input}
				stop={stop}
			/>
		</section>
	)
}

export default Chat
