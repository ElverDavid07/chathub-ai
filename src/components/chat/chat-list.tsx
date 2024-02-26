import ChatMessages from '@/components/chat/chat-message'
import { UseChatHelpers } from 'ai/react'

type ChatListProps = Pick<UseChatHelpers, 'reload' | 'isLoading' | 'messages'>

const ChatList = ({ messages, isLoading, reload }: ChatListProps) => {
	return (
		<section className="flex-1 space-y-5 md:max-w-2xl lg:max-w-3xl w-full">
			{messages.map((message, index) => (
				<ChatMessages
					key={message.id}
					message={message}
					isLoading={isLoading}
					reload={reload}
					isLastMessage={index === messages.length - 1}
				/>
			))}
		</section>
	)
}

export default ChatList
