import type { ChildrenProps } from '@/interfaces/children-props'

const AuthLayout = ({ children }: ChildrenProps) => {
	return (
		<section className="flex items-center justify-center h-screen">
			{children}
		</section>
	)
}

export default AuthLayout
