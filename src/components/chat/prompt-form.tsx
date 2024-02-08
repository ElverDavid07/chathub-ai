'use client'
import { Button } from '@/components/ui/button'
import { useEnterSubmit } from '@/lib/hooks/use-enter-submit'
import { UseChatHelpers } from 'ai/react'
import { ArrowUp, StopCircle } from 'lucide-react'
import { useEffect, useRef } from 'react'
import TextArea from 'react-textarea-autosize'

interface PromptProps
	extends Pick<
		UseChatHelpers,
		'input' | 'isLoading' | 'handleSubmit' | 'handleInputChange' | 'stop'
	> {}

const PromptForm = ({
	input,
	handleInputChange,
	handleSubmit,
	isLoading,
}: PromptProps) => {
	const { onKeyDown, formRef } = useEnterSubmit()
	const inputRef = useRef<HTMLTextAreaElement>(null)
	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus()
		}
	}, [])
	return (
		<form className="w-full py-5" ref={formRef} onSubmit={handleSubmit}>
			<div className="relative">
				<TextArea
					placeholder="Send a message..."
					rows={1}
					maxRows={8}
					onKeyDown={onKeyDown}
					onChange={handleInputChange}
					value={input}
					ref={inputRef}
					className="py-4 px-2 rounded-xl w-full resize-none border bg-transparent placeholder:text-black/50 dark:placeholder:text-white/50 border-black/50 dark:border-white/50 focus:outline-none pr-16 min-h-[60px]"
				/>
				{isLoading ? (
					<Button
						size="icon"
						type="submit"
						variant="ghost"
						onClick={stop}
						className="absolute bottom-3 right-3 rounded-lg"
					>
						<StopCircle size="25" />
					</Button>
				) : (
					<Button
						size="icon"
						type="submit"
						variant="default"
						className="absolute bottom-3 right-3 rounded-xl"
						disabled={!input || isLoading}
					>
						<ArrowUp size="18" />
					</Button>
				)}
			</div>
		</form>
	)
}

export default PromptForm
