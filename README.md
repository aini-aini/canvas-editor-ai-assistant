# ai-assistant

AI Assistant 插件，适用于 canvas-editor。

## 安装

```bash
npm install @aini_ai/ai-assistant
```

## 使用方法

```js

import cardPlugin from '@aini_ai/ai-assistant';

// 这里就是canvas-editor 的实例
const instance = new Editor(
    container,
    {
      header: [ 
       
      ]
    },
    options
  )

  // 在 canvas-editor 中注册插件
  instance.use(cardPlugin,{ apiKey: '你的seepseek模型的apiKey' })
```

## 参数说明

| 参数    | 说明         | 类型   | 是否可选 |
| ------- | ------------ | ------ | -------- |
| apiKey  | AI 接口密钥  | string | 是       |

## 贡献


## License

## 功能
![使用说明截图1](https://gitee.com/aini0424/cssn_images/raw/master/1.png)
![使用说明截图1](https://gitee.com/aini0424/cssn_images/raw/master/2.png)
![使用说明截图1](https://gitee.com/aini0424/cssn_images/raw/master/3.png)
![使用说明截图1](https://gitee.com/aini0424/cssn_images/raw/master/4.png)

