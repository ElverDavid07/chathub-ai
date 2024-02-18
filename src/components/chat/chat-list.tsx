import ChatMessages from '@/components/chat/chat-message'
import IconChatBot from '@/components/chat/icon-chat-bot'
import IconUser from '@/components/chat/icon-user'
import { cn } from '@/lib/utils'
import { UseChatHelpers } from 'ai/react'
import ChatActions from './chat-actions'

type ChatListProps = Pick<UseChatHelpers, 'reload' | 'isLoading' | 'messages'>

const ChatList = ({ messages, isLoading, reload }: ChatListProps) => {
	return (
		<section className="flex-1 space-y-5 md:max-w-2xl lg:max-w-3xl w-full">
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
							'rounded-xl py-1 text-pretty dark:text-slate-200 flex flex-col gap-y-1 min-w-full w-auto',
							message.role === 'assistant' &&
								'bg-white dark:bg-white/5 shadow p-3',
						)}
					>
						<ChatMessages message={message} />
						{/*  Renderiza el componente ChatActions si el rol del mensaje es 'assistant' y la carga no está en progreso. */}
						{message.role === 'assistant' && !isLoading && (
							<ChatActions message={message} reload={reload} />
						)}
					</div>
				</section>
			))}
		</section>
	)
}

export default ChatList
