'use client'
import { useUser } from '@clerk/nextjs'
import { UserRound } from 'lucide-react'
import { Skeleton } from '../ui/skeleton'

const IconUser = () => {
	const { user, isLoaded, isSignedIn } = useUser()

	return (
		<>
			{isSignedIn ? (
				<div>
					{isLoaded ? (
						<img
							src={user.imageUrl}
							alt={`logo ${user.fullName}`}
							width={32}
							height={32}
							className="rounded-full"
						/>
					) : (
						<Skeleton className="h-8 w-8 rounded-full" />
					)}
				</div>
			) : (
				<div className="p-1 bg-white rounded-full inline-block shadow">
					<UserRound size={25} />
				</div>
			)}
		</>
	)
}

export default IconUser
