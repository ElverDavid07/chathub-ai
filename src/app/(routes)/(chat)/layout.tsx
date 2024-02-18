import Navbar from '@/components/shared/navbar'
import { ChildrenProps } from '@/interfaces/children-props'

const LayoutChat = ({ children }: ChildrenProps) => {
	return (
		<section className="relative flex h-screen min-h-screen w-full">
			{/* <Sidebar /> */}
			<div className="flex flex-col flex-1 overflow-auto scroll-smooth">
				<Navbar />
				<main className="flex flex-col flex-1">{children}</main>
			</div>
		</section>
	)
}

export default LayoutChat
