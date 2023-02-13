import { TOTAL_NUMBER_OF_ARTICLES } from './ArticlePages'
import { lastPage } from './ArticlePages'

interface PaginationControlProps {
	page: number
	pageDown: () => void
	pageUp: () => void
}

const PaginationControl: React.FC<PaginationControlProps> = props => {
	return (
		<div className='border-2 border-blue-400 flex flex-row text-2xl my-3 justify-center mx-auto w-fit rounded'>
			<button
				className={`${
					props.page === 1
						? 'hidden'
						: 'text-blue-400 hover:bg-blue-400 hover:text-white px-2 active:bg-blue-300 transition-colors duration-150'
				}`}
				onClick={props.pageDown}
			>
				{'<'}
			</button>
			<div className='border-x-2 border-blue-400 p-2 px-4 font-medium dark:text-white'>
				{props.page}
			</div>
			<button
				className={`${
					props.page === lastPage
						? 'hidden'
						: 'text-blue-400 hover:bg-blue-400 hover:text-white px-2 active:bg-blue-300 transition-colors duration-150'
				}`}
				onClick={props.pageUp}
			>
				{'>'}
			</button>
		</div>
	)
}

export default PaginationControl
