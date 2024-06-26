<h2>
  <span class="text-emerald-300">SFC</span> 的
  <span class="text-rose-300">甜</span> 与
  <span class="text-violet-300">酸</span>
</h2>

<p v-click="1" class="transition-800 w-580px lh-2 text-coolgray-300/50">
  我大概是从 Vue 2.4 左右的时候开始学习的，印象中 Vue 1.0 就已经发布了 SFC（Single File Component）的概念，它是 Vue 的标志特性之一。
</p>

<p v-click="1" class="transition-800 w-580px lh-2 text-coolgray-200/80">
  值得肯定的是，SFC 的确带来了很多便利，模板、样式、逻辑都在一个文件中，这样的组织方式让你可以很好地总览一个组件的全貌。
</p>

<p v-click="2" class="transition-800 w-580px lh-2 text-coolgray-100">
  但是，经过这么多年的发展之后，我们还是只有 SFC 可供选择吗？
</p>

<p v-click="3" class="transition-800 w-580px lh-2 text-coolgray-100 flex items-center">
  <div class="text-16 mr-4" i-twemoji:thinking-face />
  <span>
    我常常听到一些 Vue 用户想要 <span class="text-fuchsia-300">能在一个文件中能够定义多个组件。</span>
    这样的需求到底是源自于什么呢？
  </span>
</p>

<ul class="flex flex-col w-580px lh-2 text-coolgray-300/80">
  <li v-click="4" class="transition-800">组件必须以文件形式存在，是否言过其实</li>
  <li v-click="5" class="transition-800">同时编写作用相关联的组件，总需要在不同文件中来回切换</li>
</ul>

<!--
我一开始学习 Vue 的时候其实 Vue 已经算是比较成熟了，有了很完善的生态和工具链，从那个时候起到现在，都觉得用 SFC 来编写代码是一件理所应当的事情。

/ clicks = 2 / 那么我们现在只有 SFC 这一种选择么？有些做过组件库的同学可能会说，当然不是，你也可以用 JSX 的形式去组织 Vue 组件。除这两者之外，还有其他的选择么？或者说，我们应该有第三种么？

/ clicks = 3 / 「 读 PPT 文案 」... 我觉得可能分下几点来讨论。

/ clicks = 4 / 「 读 PPT 文案 」... 虽然我看到一些新兴的前端框架比如 Svelte、Astro 都有在参考 Vue 的单文件组件的设计，但许多对此有抱怨的人都是觉得这个操作过程说长不长、说短不短，比较破坏 “心流” 状态的。

/ clicks = 5 / 「 读 PPT 文案 」... 当然我觉得最重要的是这一点。很多同学编写组件的过程可能都是先把组件写的老长然后再慢慢拆分，是自底向上地编写的。因此写着写着就需要来回切换文件，这个过程可能会让人觉得很烦躁，同样很破坏 “心流” 状态。尽管 React 的项目变得庞大之后也可能有这样的烦恼，但同比起来 Vue SFC 需要的切换次数总是更多一些。

而对于 Vue Vine 来说，这个需求本身就是一个初衷、是一个出发点，也已经成为了我们想解决的问题。那么我们接下来先看看社区里面有没有类似的解决方案也在做这个事情。
-->
