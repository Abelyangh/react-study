## Reference 

[Webpack 中文指南](http://zhaoda.net/webpack-handbook/index.html)
http://zhaoda.net/webpack-handbook/index.html 


Webpack 是当下最热门的前端资源模块化管理和打包工具。它可以将许多松散的模块按照依赖和规则打包成符合生产环境部署的前端资源。还可以将按需加载的模块进行代码分隔，等到实际需要的时候再异步加载。通过 loader 的转换，任何形式的资源都可以视作模块，比如 CommonJs 模块、 AMD 模块、 ES6 模块、CSS、图片、 JSON、Coffeescript、 LESS 等。


## installation 


$ npm install webpack -g 

2. need install webpack into your project node_modules

$ npm install webpack --save-dev

if you want to use webpack develop tools ,

$ npm install webpack-dev-server --save-dev


## Loader 

Webpack 本身只能处理 JavaScript 模块，如果要处理其他类型的文件，就需要使用 loader 进行转换。

Loader 可以理解为是模块和资源的转换器，它本身是一个函数，接受源文件作为参数，返回转换的结果。这样，我们就可以通过 require 来加载任何类型的模块或文件，比如 CoffeeScript、 JSX、 LESS 

npm install css-loader style-loader 


## Configuration

webpack.config.js 

```
const webpack = require('webpack')

module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  }
}

```

npm package.json file 


## plugins

插件可以完成更多 loader 不能完成的功能。

插件的使用一般是在 webpack 的配置信息 plugins 选项中指定。

Webpack 本身内置了一些常用的插件，还可以通过 npm 安装第三方插件。

```
var webpack = require('webpack')

module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  },
  plugins: [
    new webpack.BannerPlugin('This file is created by zhaoda')
  ]
}
```
## development environment

当项目逐渐变大，webpack 的编译时间会变长，可以通过参数让编译的输出内容带有进度和颜色

webpack --progress --colors

如果不想每次修改模块后都重新编译，那么可以启动监听模式。开启监听模式后，没有变化的模块会在编译后缓存到内存中，而不会每次都被重新编译，所以监听模式的整体速度是很快的。

$ webpack --progress --colors --watch

## error handle

Webpack 的配置比较复杂，很容出现错误，下面是一些通常的故障处理手段。
  
一般情况下，webpack 如果出问题，会打印一些简单的错误信息，比如模块没有找到。我们还可以通过参数 --display-error-details 来打印错误详情

webpack --display-error-details

## Loader 

Loader 其他的资源文件,不是javascript文件， 如 es2015 ,css , image 等。 

babel-loader: The interface between Babel and Webpack
babel-core: Understands how to read & parse code, and generate corresponding output
babel-preset-es2015: Rules for Babel on how to process ES2015 code and convert it into ES5

```
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};
```
test: We need to tell the Loader that we only want it to process JavaScript files. We don't want it to look for CSS, HTML, images and so on - only JavaScript (.js) files. In order to do so, we provide a regex expression that will match .js files
loader: The loader to use - in this case the Babel Loader
exclude: We don't want Babel to process any files under node_modules
query.presets: which Babel Preset (or rules) we want to apply - in our case we're looking for Babel to convert ES2015 code

CSS and style loader 
```
loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            }
        ]
```
ExtractTextPlugin
extract the CSS and output it into a file that we can then import

```
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css-loader')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ]
};
```
Image page loader 

image-webpack-loader: will try to automatically compress large images for us
url-loader: will inline the results from image-webpack-loader if the results are small, and include the image in the output directory if they are large

```
          {
                test: /\.png$/,
                loaders: [
                    'url-loader?limit=5000',
                    'image-webpack-loader'
                ]
            }
```

reference:
https://github.com/dwqs/blog/issues/21
