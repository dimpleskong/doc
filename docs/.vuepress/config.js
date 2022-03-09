const sidebar = require('./sidebar')
module.exports = {
	title: 'Dimples - 文档站',
  base: '/doc/',
  themeConfig: {
		smoothScroll: true,
		repo: 'https://github.com/dimpleskong/doc',
		repoLabel: '查看源码',
		docsRepo: 'https://github.com/dimpleskong/doc',
		docsBranch: 'master',
		editLinks: true,
		editLinkText: '编辑此页',
		lastUpdated: '最后更新', // string | boolean
		editLinks: true,
		locationMode : 'hash',
		docsDir: 'docs',
    sidebar
	},
  rules: [{
		test: /\.less$/,
		use: [{
			loader: 'less-loader',
			options: {
				javascriptEnabled: true
			}
		}]
	}],
}
