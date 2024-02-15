import Tooltip from '@/components/ui/tooltip'
import { useCopyToClipboard } from '@/lib/hooks/use-copy-to-clipboard'
import { Message } from 'ai'
import { Check, Copy, RotateCcw } from 'lucide-react'

interface ChatMessageActionsProps extends React.ComponentProps<'div'> {
	message: Message
}

const ChatActions = ({ message }: ChatMessageActionsProps) => {
	const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 3000 })
	const onCopy = () => {
		if (isCopied) return
		copyToClipboard(message.content)
	}

	return (
		<div className="flex items-center gap-x-2 text-slate-700 dark:text-slate-300">
			<Tooltip content="Copy" placement="bottom">
				<div
					onClick={onCopy}
					onKeyDown={onCopy}
					className="cursor-pointer dark:hover:text-white"
				>
					{isCopied ? <Check size={15} /> : <Copy size={15} />}
					<span className="sr-only">Copy code</span>
				</div>
			</Tooltip>
			<Tooltip content="Regenerate" placement="bottom">
				<RotateCcw
					size={15}
					className="cursor-pointer dark:hover:text-white transition-all"
				/>
			</Tooltip>
		</div>
	)
}

export default ChatActions
