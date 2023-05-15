monorepo: 我们采用的是微前端一个主应用，和多个子应用，我们肯定不会一个一个去install安装依赖，太傻了，我们采用monorepo 架构 一次install 即可安装完成。
pnpm:使用软链接和硬链接完成资源的加载引用，减少资源重复安装
webCompnonets: 无界微前端的原理，采用这个实现
wujie-vue-setup:使用无界微前端封装的vue框架
moudle:模块联邦技术，去中心化。封装的框架https://emp2.netlify.app/