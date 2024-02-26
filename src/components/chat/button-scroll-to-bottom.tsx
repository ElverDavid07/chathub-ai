'use client'

import { Button, type ButtonProps } from '@/components/ui/button'
import { useAtBottom } from '@/lib/hooks/use-at-bottom'
import { cn } from '@/lib/utils'
import { ArrowDown } from 'lucide-react'

export function ButtonScrollToBottom({ className, ...props }: ButtonProps) {
	const isAtBottom = useAtBottom()

	return (
		<Button
			variant="outline"
			size="icon"
			className={cn(
				'absolute bottom-28 inset-1/2 z-10 bg-background transition-opacity duration-300 sm:right-8 md:top-2',
				className,
			)}
			onClick={() =>
				window.scrollTo({
					top: document.body.offsetHeight,
					behavior: 'smooth',
				})
			}
			{...props}
		>
			<ArrowDown />
			<span className="sr-only">Scroll to bottom</span>
		</Button>
	)
}
