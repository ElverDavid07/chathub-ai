'use client'

import { FC, memo } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import { useCopyToClipboard } from '@/lib/hooks/use-copy-to-clipboard'

import { Button } from '@/components/ui/button'
import { Check, Copy } from 'lucide-react'

interface Props {
	language: string
	value: string
}

const CodeBlock: FC<Props> = memo(({ language, value }) => {
	const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2000 })

	const onCopy = () => {
		if (isCopied) return
		copyToClipboard(value)
	}

	return (
		<div className="relative w-full bg-black">
			{/* navbar codeblock */}
			<div className="flex items-center justify-between w-full px-4 py-2  bg-zinc-800 text-slate-200">
				<span className="text-sm lowercase font-semibold">{language}</span>

				<Button
					variant="ghost"
					size="icon"
					className="text-xs hover:bg-zinc-800 hover:text-white focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0"
					onClick={onCopy}
				>
					{isCopied ? <Check size={18} /> : <Copy size={18} />}
					<span className="sr-only">Copy code</span>
				</Button>
			</div>

			<SyntaxHighlighter
				language={language}
				style={coldarkDark}
				PreTag="div"
				wrapLongLines
				customStyle={{
					margin: 0,
					width: '100%',
					background: 'transparent',
					padding: '1.5rem 1rem',
				}}
				lineNumberStyle={{
					userSelect: 'none',
				}}
				codeTagProps={{
					style: {
						fontSize: '0.9rem',
						fontFamily: 'var(--fira_code)',
					},
				}}
			>
				{value}
			</SyntaxHighlighter>
		</div>
	)
})
CodeBlock.displayName = 'CodeBlock'

export { CodeBlock }
