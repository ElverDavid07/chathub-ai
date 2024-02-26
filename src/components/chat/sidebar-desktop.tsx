'use client'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useUser } from '@clerk/nextjs'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import TooltipUi from '../ui/tooltip'

const SidebarDesktop = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true)
	const handleCloseSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen)
	}
	const { user } = useUser()
	return (
		<section className={cn('hidden lg:flex items-center overflow-hidden z-50')}>
			<div
				className={cn(
					'flex flex-col bg-black h-full py-4 transition-all ease-in',
					isSidebarOpen ? 'w-64 translate-x-0 px-2' : 'w-0 -translate-x-64',
				)}
			>
				<div className="flex-1 mt-5">
					<Link
						href="/chat"
						className={cn(
							buttonVariants({ variant: 'outline' }),
							'h-10 w-full justify-start px-4 shadow-none transition-colors text-white hover:text-zinc-200 bg-zinc-900 hover:bg-zinc-300/10 border border-white/10 rounded-lg',
						)}
					>
						<Plus className="-translate-x-2 stroke-2" />
						New Chat
					</Link>
					<span className="flex justify-center mt-10 text-white/50 text-sm">
						No chat history
					</span>
				</div>
			</div>
			{/* Open and close sidebar */}
			<TooltipUi
				content={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
				placement="right"
			>
				<div
					className="cursor-pointer h-20 w-10 flex items-center justify-center group"
					onClick={handleCloseSidebar}
					onKeyUp={handleCloseSidebar}
				>
					<span className="h-6 w-1 bg-slate-400 dark:group-hover:bg-white group-hover:bg-slate-700 transition-all rounded-full" />
					<span className="sr-only">Open and close sidebar</span>
				</div>
			</TooltipUi>
		</section>
	)
}

export default SidebarDesktop
