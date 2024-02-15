'use client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const HomePage = () => {
	const { push } = useRouter()
	return (
		<section className="flex flex-col gap-y-5 items-center justify-center">
			<h2 className="text-center pt-10  font-extrabold text-4xl animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] dark:bg-[linear-gradient(110deg,#939393,45%,#fff,55%,#939393)] bg-[length:250%_100%] bg-clip-text  text-transparent">
				Home page
			</h2>
			<Button variant="started" size="lg" onClick={() => push('/chat')}>
				Get started
			</Button>
		</section>
	)
}

export default HomePage
