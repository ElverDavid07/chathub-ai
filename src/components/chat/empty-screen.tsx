import { useUser } from '@clerk/nextjs'

const EmptyScreen = () => {
	const { user } = useUser()
	return (
		<section className="h-full max-w-3xl w-full mx-auto mt-10 flex flex-col items-center">
			<p className="text-white/80 text-xl md:text-2xl font-bold flex-1 text-balance capitalize">
				{`Hi ${
					user?.firstName?.toLocaleLowerCase() ?? ''
				} How can I help you today?`}
			</p>
		</section>
	)
}

export default EmptyScreen
