<h2 class="font-bold text-coolGray">
  “他山之石”
</h2>

<p class="flex flex-col transition-800 w-auto lh-2 text-coolgray-300 text-4">
  <span class="my2">要说 <span class="text-teal-200:80">“谁家框架拆分组件更容易”</span> 这件事上，</span>
  <div class="my2 row-flex">
    隔壁框架的用户们可能有话说。
    <div class="text-6 ml-4" i-twemoji:face-with-raised-eyebrow />
    <span class="row-flex text-sky-400">「 某 R：谁在 Cue 我呢？」</span>
  </div>
</p>

<p v-click="1" class="flex flex-col transition-800 w-auto lh-2 text-coolgray-300 text-4">
  <span class="mb1">
    React 通过 <code class="font-bold text-rose-300">UI = f(state)</code> 
    这一理念将渲染过程描述成一种函数形式，这的确非常符合直觉。
  </span>
  <span class="mb1 text-coolgray-100/60">
    Vue 的渲染机制同样也遵循这一理念，只是数据驱动层面是自动挡之于手动挡的区别。
  </span>
</p>

<p v-click="2" class="flex flex-col transition-800 w-auto lh-2 text-coolgray-300 text-6">
  <span class="mb1 text-amber-200/90 lh-10">
    我非常想要借鉴一下这种方式，<br>
    将 Vue 组件的定义方式也变成一种函数形式。
  </span>
  <span class="mb1 text-coolgray-100/60 text-4">
    但同时我又不想和 Vue 现有的书写方式割离太远，<br>
    比如要从模板切换成编写 JSX 我是不愿意的。
  </span>
</p>

<p v-click="3" class="flex flex-col transition-800 w-auto lh-2 text-coolgray-300 text-4">
  <span>
    同时 Vue 3 中 script setup 的设计本身也是脱胎于组件对象上的 setup 函数，<br>
    所以一个模式在我脑海中逐渐清晰起来 ...
  </span>
</p>

<!--

[click]

[click]

为什么不想要 JSX 呢？

首先是因为我不想丢掉 Vue 3 编译优化所带来的宝贵的性能收益。

其次是 JSX 中无法省略 .value，没有自动解包，虽然现在官方 JSX 插件也支持你在 JSX 上使用指令，但和模板原生的简洁用法比起来还是差点意思。

在 Vue 的世界里，JSX 确实有它的一席之地，但是如果通盘使用仍然有张冠李戴之嫌。
-->
