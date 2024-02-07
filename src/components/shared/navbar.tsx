'use client'
import Logo from '@/components/shared/logo'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'

const Navbar = () => {
	const { push } = useRouter()

	return (
		<header className="mx-auto container px-2 md:px-0 top-0 sticky bg-background z-10">
			<nav className="flex items-center justify-between py-5">
				<Logo />
				<div className="space-x-3">
					<Button
						variant="started"
						size="lg"
						onClick={() => push('/chat')}
						className="rounded-full"
					>
						Get started
					</Button>
				</div>
			</nav>
		</header>
	)
}

export default Navbar
