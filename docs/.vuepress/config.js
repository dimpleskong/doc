const sidebar = require('./sideBar')
module.exports = {
	title: 'Dimples - 文档站', // 不要轻易改，这个影响所有评论和issue的关联关系
  base: '/toh/dimples_doc/',
  dest: 'public',
  themeConfig: {
		smoothScroll: true,
		repo: 'https://gitlab.dxy.net/f2e/toh/dimples_doc',
		repoLabel: '查看源码',
		docsRepo: 'https://gitlab.dxy.net/f2e/toh/dimples_doc',
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
