# Markdown 插槽
VuePress 实现了一套针对 Markdown 的内容分发 API。通过这个特性，你可以将你的文档分割成多个片段，以便于在布局组件中灵活组合。

# 为什么需要 Markdown 插槽
首先，我们回顾一下布局组件和 Markdown 文件之间的关系：

Markdown File 1
Markdown File 2
Layout Component
Markdown File 3
Provider
Consumer
Markdown 文件是元数据（页面内容、配置等）的提供者，而布局组件负责消费他们。我们可以通过 