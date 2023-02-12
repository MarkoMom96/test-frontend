interface CardProps {
	small?: boolean
	imagePath: string
	tag: string
	title: string
	desc: string
	linkHref: string
}

const Card: React.FC<CardProps> = props => {
	if (props.small)
		return (
			<div className='flex flex-row-reverse justify-between gap-3 p-2 w-[540px] h-[217px] m-[-1px] border-2 bg-white dark:bg-gray-600 dark:text-white border-blue-400 transition-all duration-150 hover:-translate-x-[6px] hover:-translate-y-[6px] hover:drop-shadow-custom ease-in'>
				<img src={props.imagePath} />
				<div className='flex flex-col justify-between'>
					<span className='font-bold uppercase text-[10px]'>{props.tag}</span>
					<h1 className='text-[18px] tracking-tighter font-serif leading-5'>
						{props.title}
					</h1>
					<p className='opacity-60 text-sm'>
						{props.desc.substring(0, 100) + '...'}
					</p>
					<a
						href={props.linkHref}
						className='text-blue-400 font-semibold uppercase text-[10px] w-fit'
					>
						read more {'>'}
					</a>
				</div>
			</div>
		)
	return (
		<div className='flex flex-col justify-between gap-3 p-2 w-[540px] h-[434px] m-[-1px] border-2 border-blue-400 bg-white dark:bg-gray-600 dark:text-white transition-all duration-150 hover:-translate-x-[6px] hover:-translate-y-[6px] hover:drop-shadow-custom ease-in'>
			<img src={props.imagePath} className='w-full h-[245px]' />
			<span className='font-bold uppercase text-[10px]'>{props.tag}</span>
			<h1 className='text-[18px] tracking-tighter w-4/5 font-serif leading-5'>
				{props.title}
			</h1>
			<p className='opacity-60 text-sm w-2/3 overflow-hidden'>
				{props.desc.substring(0, 100) + '...'}
			</p>
			<a
				href={props.linkHref}
				className='text-blue-400 font-semibold uppercase text-[10px] w-fit'
			>
				read more {'>'}
			</a>
		</div>
	)
}

export default Card
