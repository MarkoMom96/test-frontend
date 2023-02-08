interface ListItemProps extends React.ComponentPropsWithoutRef<'li'> {
	children: React.ReactNode
	tailwind?: string
}

const ListItem: React.FC<ListItemProps> = ({ children, tailwind, ...rest }) => {
	return (
		<li
			className={`inline px-2 py-2 hover:bg-blue-200 transition-colors duration-200 cursor-pointer ${tailwind}`}
			{...rest}
		>
			{children}
		</li>
	)
}

export default ListItem
