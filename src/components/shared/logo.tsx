import { cn } from '@/lib/utils'
import { Bot } from 'lucide-react'
import { Montserrat } from 'next/font/google'
import Link from 'next/link'

const montserrat = Montserrat({ subsets: ['latin'] })

const Logo = () => {
	return (
		<Link href={'/'}>
			<div
				className={cn(
					'hidden lg:flex items-center gap-x-1 font-bold',
					montserrat.className,
				)}
			>
				<Bot size={30} />
				<div className="text-lg">
					<span>ChatHub</span>
					<span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
						Ai
					</span>
				</div>
			</div>
		</Link>
	)
}

export default Logo
