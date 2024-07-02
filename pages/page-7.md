<h2 class="font-bold text-coolGray">
  “百尺竿头”
</h2>

<p v-click="[0,6]" class="flex flex-col w-auto lh-2 text-coolgray-300 text-4">
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
    接下来我想稍微展开一点支线任务：IDE 支持的探索，简单讲讲 Vue Vine 与 Volar 的缘分。
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

<p v-click="[6,10]" class="flex flex-col w-auto lh-2 text-coolgray-300 text-4">
  <div v-click="[6,7]" class="flex flex-col mb1">
    <span v-click="[6,7]" class="transition-800 mb2">
      在没有任何扩展的情况下，一个 <code>.vine.ts</code> 文件会是这样：
    </span>
    <img
      class="w-500px h-300px" 
      src="https://pic.imgdb.cn/item/66827470d9c307b7e9b07ad0.png" 
      alt="no-ext-vue-vine"
    />
  </div>
  <div v-click="[7,8]" class="flex flex-col my1">
    <span v-click="[7,8]" class="transition-800 mb2">
      在添加了语法高亮的 <code>.tmLanguage.json</code> 定义后会是这样：
    </span>
    <img 
      class="w-500px h-300px"
      src="https://pic.imgdb.cn/item/6682741ad9c307b7e9affbf1.png" 
      alt="no-ext-vue-vine"
    />
  </div>
  <div v-click="[8,9]" class="flex flex-col transition-800 my2">
    <span class="mb4">
      但虽然模板中 JS 表达式上的变量名有了颜色，却并没有和定义处建立实际的索引关系
    </span>
    <img
      class="w-600px h-auto" 
      src="https://pic.imgdb.cn/item/668277cbd9c307b7e9b57def.png" 
      alt="no-ext-vue-vine"
    />
  </div>
  <div v-click="[9,10]" class="flex flex-col transition-800 my2">
    <span class="mb4">
      使用 Volar 我们给 <code>.vine.ts</code> 生成了一份 
      <span class="text-amber-200">虚拟文件</span>
      <br>
      注入了一些伪代码模拟了对变量的引用
    </span>
    <img
      class="w-auto h-300px" 
      src="https://pic.imgdb.cn/item/6683757bd9c307b7e901478d.png" 
      alt="no-ext-vue-vine"
    />
  </div>
</p>

<video 
  autoplay 
  loop
  playsinline
  muted
  class="mt4" v-click="10"
>
  <source src="https://mp4.ziyuan.wang/view.php/dc740547486ccfc9dd3f9f0885c62032.mp4" />
</video>

<!--
[click]

[click] 可能许多同学都没有过自己实现一个 IDE 语言服务插件的经历，希望我们这趟旅程可以为你未来需要时做参考。

[click] 但实际上这个是基于 Volar.js 开发的 Vue VSCode 扩展，除了 VSCode 之外 Volar 还赋能了其他各种 IDE。

[click] 当然这次分享只能从 Vine 的视角带大家一窥 Volar 的强大能力，更多的内容还是希望未来会有更多博客文章或者线下分享。

[click] 是不是看着这个描述感觉有点绕晕了？就拿我们刚才设计的 Vine 来说，其实是一个 TS 的超集，只是需要在特定区域扩展了对 Vue 模板的语言服务支持

这种一个语言里嵌入了另一个语言的场景，就正是 Volar.js 想解决的目标。

[click] 
[click] 
[click] 
[click] 
[click] 

可以看到视频中我编写的部分都有在虚拟文件中进行映射，尤其是在编写模板部分的代码时是映射到 Volar 生成 VLS 辅助代码中，即使是编辑器上的选区操作，虚拟文件都是完全和源文件保持一致的。

这里 Vine 使用 Volar 创建虚拟文件的目的就是为了把 **`.vine.ts`** 中的 TS 上下文环境和模板部分融合到一起。

-->
