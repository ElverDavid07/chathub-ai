import { Bot } from 'lucide-react'

const IconChatBot = ({ size }: { size: number }) => {
	return (
		<div className="p-1 bg-white rounded-full inline-block shadow dark:text-black ">
			<Bot size={size} />
		</div>
	)
}

export default IconChatBot
