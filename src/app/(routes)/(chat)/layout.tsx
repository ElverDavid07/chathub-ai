import NavbarChatPage from '@/components/chat/navbar-chat-page'
import type { ChildrenProps } from '@/interfaces/children-props'

const ChatLayout = ({ children }: ChildrenProps) => {
	return (
		<>
			<NavbarChatPage />

			{children}
		</>
	)
}

export default ChatLayout
