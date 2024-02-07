'use client'
import Logo from '@/components/shared/logo'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from '../ui/button'

const Navbar = () => {
	const { push } = useRouter()
	const pathName = usePathname()
	return (
		<header className="mx-auto container px-2 md:px-0 top-0 sticky bg-background z-10">
			<nav className="flex items-center justify-between py-5">
				<Logo />
				<div className="space-x-3">
					{pathName === '/' ? (
						<Button
							variant="started"
							size="lg"
							onClick={() => push('/chat')}
							className="rounded-full"
						>
							Get started
						</Button>
					) : null}
				</div>
			</nav>
		</header>
	)
}

export default Navbar
