# Converter
A VScode extension

## How to use

* Open this project in VSCode
* Make sure you have set up the VSCode extension testing environment by following https://code.visualstudio.com/api/get-started/your-first-extension
* or you could just run `npm install -g yo generator-code`
* Click Run -- Start Debugging, a new VScode testing window will be opened
* Use Cmd + Shift + P (MacOS) to open the command line in VScode
* Type "Hello World" to test the extension is working, you should see a notification window on the right left corner

## 摸爬滚打的心路历程

* 目前没有找到比较成熟的直接转换 protobuf file/json file 成OpenAPI yaml file 的 package，Google 有一个官方支持的 Go 环境下的 converter -- gnostic https://github.com/google/gnostic, 但是目前该官方 package 中有已经 deprecated 的 dependencies，官方还没有更新，最近的相关 issue 是两星期前，没有被 resolve, 见：
https://github.com/google/gnostic/issues/391

* 接下来实现该 project 有两种路径：
   1. 在 gnostic 更新后，它能实现的功能是在protobuf和 json/yaml 之间实现互相转换，那么可以先将目前的 protobuf 文件转换成 json，然后和已有的 json 文件合并，再将合并后的 json 文件转换成 yaml in OpenAPI format
   2. 自行实现转换的逻辑，这个需要看 gnostic 以及其他一些 package 的源码来进行研究，预计需要花较长的时间


## References

## OpenAPI
https://github.com/OAI/OpenAPI-Specification

[Home - OpenAPI Initiative](https://www.openapis.org/)

[Getting Started | OpenAPI Documentation](https://learn.openapis.org/)

[OpenAPI Specification - Wikipedia](https://en.wikipedia.org/wiki/OpenAPI_Specification)

## TypeScript
[Learn TypeScript | Codecademy](https://www.codecademy.com/learn/learn-typescript)

[Get started with TypeScript - Training | Microsoft Learn](https://learn.microsoft.com/en-us/training/modules/typescript-get-started/)

## Vscode Extension
[Your First Extension | Visual Studio Code Extension API](https://code.visualstudio.com/api/get-started/your-first-extension)

## Websocket
[WebSocket - Wikipedia](https://en.wikipedia.org/wiki/WebSocket)

[WebSocket - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)

[Writing WebSocket client applications - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)

## ProtoBuf
[Overview | Protocol Buffers Documentation](https://protobuf.dev/overview/)

[Language Guide (proto 3) | Protocol Buffers Documentation](https://protobuf.dev/programming-guides/proto3/)

## Json to OpenAPI
[GitHub - OzzyCzech/mock-to-openapi: Cli tool (and library) for converting JSON mock objects to OpenAPI schemas](https://github.com/OzzyCzech/mock-to-openapi)

## Bugs

[protocol buffers - Unable to build protobuf to go endpoint - Stack Overflow](https://stackoverflow.com/questions/28099004/unable-to-build-protobuf-to-go-endpoint)

[Request to remove reference to deprecated module ‘github.com/golang/protobuf’ · Issue #391 · google/gnostic · GitHub](https://github.com/google/gnostic/issues/391)

## 心路历程

Protoc的command 在使用过程中遇到了各类不同的 bug，比如找不到对应的 option — ts_namespace, 需要根据 error message 一个个排查。不过找不到 ts_namespace此问题目前仍未解决，在装了对应的 plugin 后依然无法识别，TODO.


