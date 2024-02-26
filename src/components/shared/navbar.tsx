'use client'
import SidebarMobile from '@/components/chat/sidebar-mobile'
import Logo from '@/components/shared/logo'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { UserButton, useUser } from '@clerk/nextjs'
import { LogIn } from 'lucide-react'
import { useRouter } from 'next/navigation'

const Navbar = () => {
	const { isSignedIn, isLoaded } = useUser()

	const { push } = useRouter()
	return (
		<header className="2xl:mx-auto 2xl:container px-2 md:px-16 top-0  sticky bg-background z-50 border-b border-white/20 md:border-none mb-3">
			<nav className="flex items-center justify-between py-2 md:py-3">
				<div className="flex items-center gap-x-3">
					<SidebarMobile />
					<Logo />
				</div>
				<section className="flex items-center gap-x-3">
					<ThemeToggle />
					{isLoaded ? (
						<div>
							{isSignedIn ? (
								<UserButton afterSignOutUrl="/sign-in" />
							) : (
								<Button
									className="gap-x-1 rounded-lg group"
									onClick={() => push('sign-in')}
								>
									Log in
									<LogIn
										size={18}
										className="group-hover:translate-x-1 transition-all"
									/>
								</Button>
							)}
						</div>
					) : (
						<Skeleton className="h-9 w-9 rounded-full" />
					)}
				</section>
			</nav>
		</header>
	)
}

export default Navbar
