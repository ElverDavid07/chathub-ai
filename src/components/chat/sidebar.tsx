'use client'
import { Button } from '@/components/ui/button'
import UseSidebar from '@/lib/hooks/use-sidebar'
import { cn } from '@/lib/utils'
import { SquarePen } from 'lucide-react'
import { usePathname } from 'next/navigation'
import TooltipUi from '../ui/tooltip'
import IconUser from './icon-user'

const Sidebar = () => {
	const { closeSidebar, isSidebarOpen } = UseSidebar()
	const pathName = usePathname()

	return (
		<section className={cn('md:flex items-center overflow-hidden z-50')}>
			<div
				className={cn(
					'flex flex-col bg-black h-full py-4 transition-all ease-in',
					isSidebarOpen ? 'w-64 translate-x-0 px-2' : 'w-0 -translate-x-64',
				)}
			>
				<div className="flex-1 mt-5">
					<Button className="w-full gap-x-5">
						New chat
						<SquarePen size={16} />
					</Button>
				</div>
				<section className="dark:bg-white/5 w-full  rounded-lg p-2 space-y-5">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-x-2">
							<IconUser />
							<span className="font-bold"> User</span>
						</div>
						{/* Badge */}
						<span className="inline-block bg-green-500 font-bold  px-2 py-[2px] rounded-lg text-xs ">
							Free
						</span>
					</div>
					<Button className="w-full" variant="outline">
						Upgraded to Pro
					</Button>
				</section>
			</div>
			{/* Open and close sidebar */}
			<TooltipUi
				content={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
				placement="right"
			>
				<div
					className="cursor-pointer h-20 w-10 flex items-center justify-center group"
					onClick={closeSidebar}
					onKeyUp={closeSidebar}
				>
					<span className="h-6 w-1 bg-slate-400 dark:group-hover:bg-white group-hover:bg-slate-700 transition-all rounded-full translate-y-[-]" />
					<span className="sr-only">Open and close sidebar</span>
				</div>
			</TooltipUi>
		</section>
	)
}

export default Sidebar
