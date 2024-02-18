import { CodeBlock } from '@/components/chat/code-block'
import { MemoizedReactMarkdown } from '@/components/chat/markdown'
import { cn } from '@/lib/utils'
import type { Message } from 'ai'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'

export interface ChatMessageProps {
	message: Message
}

const ChatMessages = ({ message }: ChatMessageProps) => {
	return (
		<MemoizedReactMarkdown
			remarkPlugins={[remarkGfm, remarkMath]}
			className="prose break-words text-slate-700 dark:prose-invert dark:text-slate-300 prose-p:leading-relaxed prose-pre:p-0 table-markdown"
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
	)
}

export default ChatMessages
