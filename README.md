### dva-ts-auth


```

npm install

npm start 开发

npm build  构建


```

基于antd-pro 1 用ts改造而成，添加了完成的权限认证和动态菜单

[预览地址](http://www.chenjinxinlove.com/dva-ts-auth/#/)

没有认证的可以使用 https://github.com/chenjinxinlove/dva-ts
#### 权限认证

权限认证分三个级别

##### 视图控制

登陆之后后端返回

```
{
  "code": 1,
  "data": {
    "token": "kshdkhalsdjlajldja;lsjd",
    "slideAuths": [
      "/other",
      "/other/upload",
      "/upload/other/add"
    ],
    "apiAuths": [
      "POST/api/upload"
    ]
  }
}
```
slideAuths是用于侧边栏和动态路由的生成，本地全部的路由和slideAuths取交集来确定用户的权限和根据交集来生成侧边栏
##### 请求控制
apiAuths是全端控制api的权限，如何返回空就不控制，由后端控制，在request中统一进行了一层拦截

##### 自定义组件

重写button组件为AuthButton组件和认证组件AuthCheck，传入对应的url

```
<div>验证api权限/upload/other/add</div>
<AuthButton url="/upload/other/add">验证api权限/upload/other/add</AuthButton>
<div>验证api权限/upload/other/edit</div>
<AuthButton url="/upload/other/edit">验证api权限/upload/other/edit</AuthButton>
```
返回的slideAuths中

```
/upload/other/add
```
就是用来进行组件控制的
