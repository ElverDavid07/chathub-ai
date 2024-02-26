'use client'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

const SidebarMobile = () => {
	return (
		<section className="lg:hidden">
			<Sheet>
				<SheetTrigger asChild>
					<Button size="icon" variant="ghost">
						<Menu />
					</Button>
				</SheetTrigger>
				<SheetContent side="left" className="w-64">
					<h2>hello word</h2>
				</SheetContent>
			</Sheet>
		</section>
	)
}

export default SidebarMobile
