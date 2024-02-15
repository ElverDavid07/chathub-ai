import { useUser } from '@clerk/nextjs'

const EmptyScreen = () => {
	const { user, isLoaded, isSignedIn } = useUser()
	return (
		<section className="h-full">
			<div>
				{isSignedIn ? (
					<div>
						<span className="text-3xl font-bold bg-gradient-to-br from-violet-500 to-fuchsia-500 bg-clip-text text-transparent ">{`Hi, ${
							isLoaded && user.firstName
						}.`}</span>
					</div>
				) : (
					<h2>sd</h2>
				)}
			</div>
		</section>
	)
}

export default EmptyScreen
