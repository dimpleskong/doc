# 丁香人才前端文档站

![](./docs/.vuepress/public/logo.png)

欢迎来到丁香人才前端文档站，看完以下可以帮你快速编辑和发布一篇文章。

[点击查看站点](http://f2e.gitlab.dxy/toh/jobmd_doc/)

## 撰写规范

文章撰写严格遵循 [markdown](https://www.jianshu.com/p/191d1e21f7ed) 语法, 如果你是新手，了解这个对于互联网写作还是非常有帮助。

## 开始写一篇文章

1.  **写文章**：站点的所有文章都托管在 `docs/entry/` 目录下，写一篇文章需要创建一个符合 markdown 语法的 `.md` 文件
2.  **将文章加到侧边栏**：文章写完需要显示地将文章地址加到侧边栏 `docs/.vuepress/sideBar.js`
3.  **提交文章并构建站点**：目前写文章都默认在 dev 分支上，写完文章，需要发起`dev -> master`的 mr，并@相关同学。 master 分支是有部署 CI 自动构建站点+机器人通知的，每次提交都会构建一次。所以为了避免频繁触发通知，**应避免直接在 master 分支提交代码**
4.  **更友好的 mr 机器人通知**：每次构建的消息通知默认抓取的是 mr 的 commit 消息，建议自己重新编辑一下

| 消息通知对比                                     | 此处编辑 MR 的 Commit                           | 推荐文案                                       |
| ------------------------------------------------ | ----------------------------------------------- | ---------------------------------------------- |
| ![消息通知对比图](./guide/img/noticeExample.png) | ![此处编辑MR的Commit图](./guide/img/editMr.png) | ![推荐文案图](./guide/img/MrMsgSuggestion.png) |

## docs 目录规划

```markdown
docs
├── .vuepress
| ├── components 自定 vue 组件，比如站点首页的卡片
| ├── public 静态资源，比如站点 logo
| ├── config.js 站点的配置
| ├── enhanceApp.js vue 实例相关的配置
| └── sideBar.js 侧边栏展示目录配置

## 开发相关

参考：[vuepress 文档](https://vuepress.vuejs.org/zh/guide/)

`yarn install && yarn dev`
