import ChatMessages from '@/components/chat/chat-message'
import IconChatBot from '@/components/chat/icon-chat-bot'
import IconUser from '@/components/chat/icon-user'
import { cn } from '@/lib/utils'
import type { Message } from 'ai'
import ChatActions from './chat-actions'

interface ChatListProps {
	messages: Message[]
}

const ChatList = ({ messages }: ChatListProps) => {
	return (
		<section className="flex-1 space-y-5 md:max-w-3xl w-full">
			{messages.map((message) => (
				<section
					key={message.id}
					className={cn(
						'space-y-2 flex flex-col md:flex-row md:place-items-end  md:mx-10 md:gap-x-3',
					)}
				>
					{/* Icons */}
					<div>
						{message.role === 'assistant' ? (
							<IconChatBot size={25} />
						) : (
							<IconUser />
						)}
					</div>
					{/* Messages */}
					<div
						className={cn(
							'rounded-xl py-1 text-pretty dark:text-slate-200 flex flex-col gap-y-1',
							message.role === 'assistant' &&
								'bg-white dark:bg-white/5 shadow p-3',
						)}
					>
						<ChatMessages message={message} />
						{message.role === 'assistant' && <ChatActions message={message} />}
					</div>
				</section>
			))}
		</section>
	)
}

export default ChatList
