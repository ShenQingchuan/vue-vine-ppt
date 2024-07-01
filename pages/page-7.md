<h2 class="font-bold text-coolGray">
  “百尺竿头”
</h2>

<p v-click="[0,3]" class="flex flex-col w-auto lh-2 text-coolgray-300 text-4">
  <div class="flex items-center my1 transition-800">
    编译器的开发的确是一件比较辛苦枯燥的工作，完成 POC 那时的喜悦是难以言表的！
    <div class="text-6 ml-2" i-twemoji:partying-face />
  </div>

  <div v-click="1" class="flex items-center my1 transition-800">
    但是... 还有 
      <span class="ml-2 font-bold text-fuchsia-300">Vite 插件</span>、
      <span class="font-bold text-blue">IDE 支持</span>、
      <span class="font-bold text-orange">ESLint 解析</span>、
    和接入社区已有生态等不计其数的后续任务
    <div class="text-6 ml-2" i-twemoji:flushed-face />
  </div>

  <div v-click="2" class="flex items-center my1 transition-800">
    接下来我想展开 IDE 支持的探索，讲讲 Vue Vine 与 Volar 的奇妙缘分。
    <div class="text-6 ml-2" i-twemoji:smiling-face-with-hearts />
  </div>
</p>

<p v-click="[3,6]" class="flex flex-col w-auto lh-2 text-coolgray-300 text-4">
  <div class="flex items-center my1 transition-800">
    提起 Volar 大家可能想到的都是这个东西：
    <img class="h60px ml-2" src="https://pic.imgdb.cn/item/66826c18d9c307b7e9a32cbf.png" alt="volar-vue-ext" />
  </div>

  <div v-click="4" class="flex items-center transition-800 mb2">
    <img class="h30px mr-2" src="https://volarjs.dev/_astro/logo.lBA1W2sL_Z2kys9L.svg" alt="volar-logo" />
    <span class="font-bold text-lightblue-600 mr2 text-6">Volar.js</span> 是背后更底层的一套提高开发语言服务开发效率的工具链
  </div>

  <div v-click="5" class="flex items-center transition-800 my2">
    它能够极大方便你开发一门
      <span class="ml2 mr1 text-5">嵌入了其他语言的</span>
      <span class="mr1 text-6">语言</span>
      <span class="mr1 font-bold text-7">的语言服务器</span>
  </div>
</p>

<!--
[click]

[click] 可能许多同学都没有过自己实现一个 IDE 语言服务插件的经历，希望我们这趟旅程可以为你未来需要时做参考。

[click] 但实际上这个是基于 Volar.js 开发的 Vue VSCode 扩展，除了 VSCode 之外 Volar 还赋能了其他各种 IDE。

[click] 当然这次分享只能从 Vine 的视角带大家一窥 Volar 的强大能力，更多的内容还是希望未来会有更多博客文章或者线下分享。

[click] 是不是看着这个描述感觉有点绕晕了？就拿我们刚才设计的 Vine 来说，其实是一个 TS 的超集，只是需要在特定区域扩展了对 Vue 模板的语言服务支持

这种一个语言里嵌入了另一个语言的场景，就正是 Volar.js 想解决的目标。

-->
