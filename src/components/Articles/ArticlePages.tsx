import { useState, useEffect } from 'react'
import Card from './Card'
import PaginationControl from './PaginationControl'

const ITEMS_PER_PAGE = 8
export const TOTAL_NUMBER_OF_ARTICLES = 40
export const lastPage = Math.ceil(TOTAL_NUMBER_OF_ARTICLES / ITEMS_PER_PAGE)

interface Article {
	id: string
	title: string
	description: string
	image: string
}

const ArticlePages = () => {
	const [articles, setArticles] = useState<Article[]>([])
	const [smallArticles, setsSmallArticles] = useState<Article[]>([])
	const [page, setPage] = useState(1)

	const pageUpHandler = () => {
		if (page < lastPage) setPage(last => last + 1)
	}
	const pageDownHandler = () => {
		if (page > 1) setPage(last => last - 1)
	}

	const fetchIndex = ((page - 1) * ITEMS_PER_PAGE).toString()

	useEffect(() => {
		fetch(
			'https://dknhmgstb7daepfpievifqg7te0vaknw.lambda-url.eu-central-1.on.aws?' +
				new URLSearchParams({
					limit: ITEMS_PER_PAGE.toString(),
					from: fetchIndex,
				})
		)
			.then(response => response.json())
			.then(data => {
				setArticles(data)
				setsSmallArticles(data.splice(-2))
			})
	}, [page])

	if (articles.length === 0 || smallArticles.length === 0) {
		return <h2>Loading...</h2>
	}
	return (
		<div>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-0 mx-auto max-w-fit'>
				{articles.map(article => (
					<Card
						key={article.id}
						imagePath={article.image}
						tag='hash-tag'
						title={article.title}
						desc={article.description}
						linkHref='/'
					/>
				))}
				{smallArticles.map(article => (
					<Card
						small
						key={article.id}
						imagePath={article.image}
						tag='hash-tag'
						title={article.title}
						desc={article.description}
						linkHref='/'
					/>
				))}
			</div>
			<PaginationControl
				page={page}
				pageDown={pageDownHandler}
				pageUp={pageUpHandler}
			/>
		</div>
	)
}

export default ArticlePages
