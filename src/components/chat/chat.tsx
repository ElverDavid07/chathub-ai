'use client'
import ChatList from '@/components/chat/chat-list'
import PromptForm from '@/components/chat/prompt-form'
import { useChat } from 'ai/react'
import EmptyScreen from './empty-screen'

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
	} = useChat()
	return (
		<section className="flex flex-col flex-1 h-full w-full items-center justify-center gap-y-6  mx-auto  px-2 md:px-0">
			{/* Section messages */}
			{messages.length ? (
				<ChatList messages={messages} isLoading={isLoading} reload={reload} />
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
