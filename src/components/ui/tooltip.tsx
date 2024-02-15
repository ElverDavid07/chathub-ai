import { Tooltip, TooltipProps } from '@nextui-org/tooltip'

interface Props extends TooltipProps {}

const TooltipUi = ({ children, ...props }: Props) => {
	return (
		<Tooltip
			className="bg-black px-2 py-1 rounded-md text-white text-sm"
			{...props}
		>
			{children}
		</Tooltip>
	)
}

export default TooltipUi
