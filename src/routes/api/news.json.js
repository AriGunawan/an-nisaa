// Get /api/news.json
export const get = async () => {
	let news = await Promise.all(
		Object.entries(import.meta.glob('../pages/news/*.md')).map(async ([path, page]) => {
			const { metadata } = await page();
			const slug = path.split('/').pop().split('.').shift();
			return { ...metadata, slug };
		})
	);

	return {
		status: 200,
		body: { news }
	};
};
