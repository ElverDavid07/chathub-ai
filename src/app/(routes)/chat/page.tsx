'use client'
import IconChatBot from '@/components/chat/icon-chat-bot'
import IconUser from '@/components/chat/icon-user'
import PromptForm from '@/components/chat/prompt-form'
import { cn } from '@/lib/utils'
import { useChat } from 'ai/react'

const ChatPage = () => {
	// Hooks
	const { messages, isLoading, handleInputChange, handleSubmit, input } =
		useChat()

	return (
		<section className="flex flex-col items-center justify-center gap-y-6 max-w-5xl mx-auto  h-screen">
			{/* Section messages */}
			<section className="flex-1 space-y-5  w-full">
				{messages.map(({ content, id, role }) => (
					<div
						key={id}
						className={cn(
							'flex place-items-end  md:mx-10',
							role === 'user' ? 'self-start flex-row-reverse' : 'self-end',
						)}
					>
						{role === 'assistant' ? <IconChatBot /> : <IconUser />}
						<div
							className={cn(
								'rounded-xl p-1 shadow mx-4',
								role === 'user'
									? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white'
									: 'bg-white',
							)}
						>
							{content}
						</div>
					</div>
				))}
			</section>
			{/* Section Prompt */}
			<section className="w-full sticky bottom-0 z-10 bg-background">
				<PromptForm
					handleInputChange={handleInputChange}
					handleSubmit={handleSubmit}
					isLoading={isLoading}
					input={input}
				/>
			</section>
		</section>
	)
}

export default ChatPage
