import Tooltip from '@/components/ui/tooltip'
import { useCopyToClipboard } from '@/lib/hooks/use-copy-to-clipboard'
import { cn } from '@/lib/utils'
import { Message } from 'ai'
import { UseChatHelpers } from 'ai/react'
import { Check, Copy, RotateCcw } from 'lucide-react'

interface ChatMessageActionsProps
	extends Pick<UseChatHelpers, 'reload' | 'isLoading'> {
	message: Message
	isLastMessage: boolean
}

const ChatActions = ({
	message,
	isLastMessage,
	reload,
	isLoading,
}: ChatMessageActionsProps) => {
	const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 3000 })
	const onCopy = () => {
		if (isCopied) return
		copyToClipboard(message.content)
	}

	return (
		<div
			className={cn(
				' transition-all flex items-center gap-x-2 text-slate-700 dark:text-slate-400 pt-1',
				isLastMessage && isLoading && 'hidden',
			)}
		>
			<Tooltip content="Copy" placement="bottom">
				<div
					onClick={onCopy}
					onKeyDown={onCopy}
					className="cursor-pointer dark:hover:text-white"
				>
					{isCopied ? <Check size={14} /> : <Copy size={14} />}
					<span className="sr-only">Copy code</span>
				</div>
			</Tooltip>
			{isLastMessage && (
				<Tooltip content="Regenerate" placement="bottom">
					<div onClick={() => reload()} onKeyDown={() => reload()}>
						<RotateCcw
							size={14}
							className="cursor-pointer dark:hover:text-white transition-all"
						/>
					</div>
				</Tooltip>
			)}
		</div>
	)
}

export default ChatActions
