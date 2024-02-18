'use client'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTrigger,
} from '@/components/ui/sheet'
import TooltipUi from '@/components/ui/tooltip'
import UseSidebar from '@/lib/hooks/use-sidebar'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'

const SidebarMobile = () => {
	const { closeSidebar, isSidebarOpen } = UseSidebar()

	return (
		<Sheet>
			<section
				className={cn('hidden md:flex items-center overflow-hidden z-50')}
			>
				<SheetContent side="left" className="w-64 flex flex-col">
					<div className="flex-1">
						<SheetHeader className="mt-5">
							<Button className="w-full">New Chat</Button>
						</SheetHeader>
					</div>
					<SheetFooter>
						<Button className="w-full" variant="outline">
							Upgrade to pro
						</Button>
					</SheetFooter>
					<SheetClose />
				</SheetContent>
				{/* Open and close sidebar */}
				<SheetTrigger>
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
				</SheetTrigger>
			</section>
		</Sheet>
	)
}

export default SidebarMobile
