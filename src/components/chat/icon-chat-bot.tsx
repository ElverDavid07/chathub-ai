import { Bot } from 'lucide-react'

const IconChatBot = ({ size }: { size: number }) => {
	return (
		<div className="flex items-center gap-x-2">
			<div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white p-1 rounded-full inline-block shadow ">
				<Bot size={size} aria-label="icon assistant" />
			</div>
		</div>
	)
}

export default IconChatBot
