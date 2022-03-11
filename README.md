# dimples文档站

![](./docs/.vuepress/public/logo.png)

欢迎来到dimples前端文档站，看完以下可以帮你快速编辑和发布一篇文章。

[点击查看站点](http://f2e.gitlab.dxy/toh/jobmd_doc/)

## 撰写规范

文章撰写严格遵循 [markdown](https://www.jianshu.com/p/191d1e21f7ed) 语法, 如果你是新手，了解这个对于互联网写作还是非常有帮助。
## docs 目录规划

```markdown
docs
├── .vuepress
| ├── components 自定 vue 组件，比如站点首页的卡片
| ├── public 静态资源，比如站点 logo
| ├── config.js 站点的配置
| ├── enhanceApp.js vue 实例相关的配置
| └── sidebar.js 侧边栏展示目录配置

## 开发相关

参考：[vuepress 文档](https://vuepress.vuejs.org/zh/guide/)

`yarn install && yarn dev`
