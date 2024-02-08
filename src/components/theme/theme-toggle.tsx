'use client'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { MoonStar, Sun } from 'lucide-react'
import { useTransition } from 'react'

export function ThemeToggle() {
	const { setTheme, theme } = useTheme()
	const [_, startTransition] = useTransition()
	const handleTheme = () => {
		startTransition(() => {
			if (theme === 'dark') {
				setTheme('light')
			} else {
				setTheme('dark')
			}
		})
	}
	return (
		<Button
			variant="outline"
			size="icon"
			className="rounded-xl"
			onClick={handleTheme}
		>
			{theme === 'dark' ? <Sun size={20} /> : <MoonStar size={20} />}
			<span className="sr-only">Toggle theme</span>
		</Button>
	)
}
