# Floor Shop

注: 下面把floorshop简写成fs,仅为方便,大家意会就好.

## Todo

- [ ] 把安卓项目整合进来
- [ ] ios项目解决方案
- [ ] 后台方案
- [ ] 测试,CI系统
- [ ] 文件共享(包括文件等)

## 注意事项

> 任何项目相关或须知在下面补充

### git操作

- master分支需要全员统一才进行更新
- dev为主要开发分支,基于dev分支checkout各自的开发分支
- 平时的开发应该在自己的分支(如 ahui 分支)上进行
- feature分支按各人习惯就好,feature分支应该要基于自己的开发分支
  - feature分支开发完成合并到自己的分支之后要删除远程的分支
- 从自己的开发分支合并到dev分支,频率各自把握
  - 建议是一个完整的功能,或是依赖变动,架构变动时再合并
- 完成一个版本后从dev分支checkout release分支,并打上版本号发布

### 前端项目

- `fs-admin`为管理端(Desktop Web)
- `fs-keeper`为商家端(Desktop Web)
- `fs-moblie`为客户(C)端(Mobile Web)
- `fs-weapp`为客户(C)端(微信小程序)

前端或Nodejs后台项目使用一致的`eslint`,`editorconfig`配置,请预先修改好各自的IDE配置并严格遵守代码规范.`babel`视情况做调整.使用yarn而非(npm)来下载依赖,这样可以保证各端依赖版本的一致性,而且`yarn`的速度比npm更快,详见[yarn文档](https://yarnpkg.com/zh-Hans/docs/install)

#### fs-moblie

使用framework7 + material design

- [framework7文档](http://framework7.io/)
- [framework7+vue文档](http://framework7.io/vue/)
