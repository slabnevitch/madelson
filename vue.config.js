module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
    ? '/madelson/' //имя проекта на gh-pages
    : '/' //путь для development mode
    
}