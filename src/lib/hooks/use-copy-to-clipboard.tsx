'use client'

import { useState } from 'react'

export interface useCopyToClipboardProps {
	timeout?: number
}

/**
 * @description  Custom hook that allows copying text to the user's clipboard and
 * managing the state of whether the copy was successful or not.
 * @param timeout - Duration in milliseconds to maintain the "copied" state before resetting it to "not copied"
 */
export function useCopyToClipboard({
	timeout = 2000,
}: useCopyToClipboardProps) {
	const [isCopied, setIsCopied] = useState<boolean>(false)

	/**
	 * @description Function that copies the specified text to the user's clipboard.
	 * @param {string} value - Text to be copied to the clipboard.
	 */
	const copyToClipboard = (value: string) => {
		if (typeof window === 'undefined' || !navigator.clipboard?.writeText) {
			return
		}

		if (!value) {
			return
		}

		navigator.clipboard.writeText(value).then(() => {
			setIsCopied(true)

			setTimeout(() => {
				setIsCopied(false)
			}, timeout)
		})
	}

	return { isCopied, copyToClipboard }
}
