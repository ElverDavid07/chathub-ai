'use client'
import { Button } from '@/components/ui/button'
import Tooltip from '@/components/ui/tooltip'
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
	// Hooks
	const { onKeyDown, formRef } = useEnterSubmit()

	const inputRef = useRef<HTMLTextAreaElement>(null)
	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus()
		}
	}, [])
	return (
		<section className="sticky bottom-0 bg-background/95 backdrop-blur-lg rounded-xl z-20 w-full md:px-2 md:w-full lg:max-w-5xl">
			<form ref={formRef} onSubmit={handleSubmit}>
				<div className="relative">
					<TextArea
						placeholder="Send a message..."
						rows={1}
						maxRows={8}
						onKeyDown={onKeyDown}
						onChange={handleInputChange}
						value={input}
						ref={inputRef}
						className="py-4 px-2 rounded-xl w-full resize-none border bg-background placeholder:text-black/50 dark:placeholder:text-white/50 border-black/50 dark:border-white/50 focus:outline-none pr-16 "
					/>

					{isLoading ? (
						<Tooltip content="Stop conversation">
							<Button
								size="icon"
								type="submit"
								variant="ghost"
								onClick={stop}
								className="absolute bottom-3 right-3 rounded-lg"
							>
								<StopCircle size="25" />
							</Button>
						</Tooltip>
					) : (
						<Tooltip content="Send message">
							<Button
								size="icon"
								type="submit"
								variant="default"
								className="absolute bottom-3 right-3 rounded-xl"
								disabled={!input || isLoading}
							>
								<ArrowUp size="18" />
							</Button>
						</Tooltip>
					)}
				</div>
			</form>
			<p className="text-center py-2 text-xs dark:text-slate-200">
				ChatHubAi beta can make mistakes. Consider checking important
				information.
			</p>
		</section>
	)
}

export default PromptForm
