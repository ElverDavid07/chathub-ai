'use client'
import Logo from '@/components/shared/logo'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { UserButton, useUser } from '@clerk/nextjs'
import { LogIn, Sun } from 'lucide-react'
import { useRouter } from 'next/navigation'

const NavbarChatPage = () => {
	const { isSignedIn, isLoaded } = useUser()
	const { push } = useRouter()
	return (
		<header className="mx-auto container px-2 md:px-0 top-0 sticky bg-background z-10">
			<nav className="flex items-center justify-between py-5">
				<Logo />
				{isLoaded ? (
					<div className="flex items-center gap-x-6">
						<Button size="icon" variant="ghost" className="rounded-lg">
							<Sun />
						</Button>
						{isSignedIn ? (
							<UserButton afterSignOutUrl="/chat" />
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
					<Skeleton className="h-8 w-8 rounded-full" />
				)}
			</nav>
		</header>
	)
}

export default NavbarChatPage
