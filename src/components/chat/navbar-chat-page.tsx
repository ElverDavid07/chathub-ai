'use client'
import Logo from '@/components/shared/logo'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { UserButton, useUser } from '@clerk/nextjs'
import { LogIn } from 'lucide-react'
import { useRouter } from 'next/navigation'

const NavbarChatPage = () => {
	const { isSignedIn, isLoaded } = useUser()
	const { push } = useRouter()
	return (
		<header className="mx-auto container px-2 md:px-0 top-0 sticky bg-background z-10">
			<nav className="flex items-center justify-between py-5">
				<Logo />
				{isLoaded ? (
					<div className="flex items-center gap-x-3">
						<ThemeToggle />
						{isSignedIn ? (
							<div className="dark:border dark:border-input dark:rounded-full">
								<UserButton afterSignOutUrl="/chat" />
							</div>
						) : (
							<Button
								className="gap-x-1 rounded-lg"
								size="lg"
								onClick={() => push('sign-in')}
							>
								Login
								<LogIn size={18} />
							</Button>
						)}
					</div>
				) : (
					<Skeleton className="h-9 w-9 rounded-full" />
				)}
			</nav>
		</header>
	)
}

export default NavbarChatPage
