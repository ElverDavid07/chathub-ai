'use cliente'

import { useState } from 'react'

const UseSidebar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true)
	const closeSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen)
	}
	return {
		isSidebarOpen,
		closeSidebar,
	}
}

export default UseSidebar
