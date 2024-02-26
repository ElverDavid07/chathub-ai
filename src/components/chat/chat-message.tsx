import ChatActions from '@/components/chat/chat-actions'
import { CodeBlock } from '@/components/chat/code-block'
import IconChatBot from '@/components/chat/icon-chat-bot'
import IconUser from '@/components/chat/icon-user'
import { MemoizedReactMarkdown } from '@/components/chat/markdown'
import { cn } from '@/lib/utils'
import type { Message } from 'ai'
import { UseChatHelpers } from 'ai/react'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'

interface ChatMessageProps
	extends Pick<UseChatHelpers, 'isLoading' | 'reload'> {
	message: Message
	isLastMessage: boolean
}

const ChatMessages = ({
	message,
	isLoading,
	reload,
	isLastMessage,
}: ChatMessageProps) => {
	return (
		<section
			className={cn(
				'space-y-2 flex flex-col md:flex-row md:place-items-end  md:mx-10 md:gap-x-3',
			)}
		>
			{/* Icons */}
			<div className="py-2">
				{message.role === 'assistant' ? (
					<IconChatBot size={25} />
				) : (
					<IconUser />
				)}
			</div>

			{/* Messages */}
			<div
				className={cn(
					'rounded-2xl py-1 text-pretty dark:text-slate-200 flex flex-col gap-y-1 p-3',
					message.role === 'assistant' &&
						'bg-white dark:bg-white/5 shadow group',
				)}
			>
				<MemoizedReactMarkdown
					remarkPlugins={[remarkGfm, remarkMath]}
					className="prose break-words text-slate-700 dark:prose-invert dark:text-slate-300 prose-p:leading-relaxed prose-pre:p-0 prose-a:text-blue-500 table-markdown"
					components={{
						code(props) {
							const { children, className, node, ...rest } = props
							const match = /language-(\w+)/.exec(className || '')
							return match ? (
								<CodeBlock
									{...rest}
									language={match[1]}
									value={String(children).replace(/\n$/, '')}
								/>
							) : (
								<code
									{...rest}
									className={cn('font-bold dark:text-white', className)}
								>
									{children}
								</code>
							)
						},
					}}
				>
					{message.content}
				</MemoizedReactMarkdown>

				{/*  Renderiza el componente ChatActions si el rol del mensaje es 'assistant' y la carga no está en progreso. */}
				{message.role === 'assistant' && (
					<ChatActions
						message={message}
						reload={reload}
						isLastMessage={isLastMessage}
						isLoading={isLoading}
					/>
				)}
			</div>
		</section>
	)
}

export default ChatMessages
