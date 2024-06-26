<h2 class="font-bold text-coolGray">
  “投石问路”
</h2>

<p
  v-click="[1,4]"
  class="flex items-center transition-800 w-580px lh-2 text-coolgray-300/50 text-6"
>
  <img class="w-6rem mr-4" src="https://vue-macros.dev/favicon.svg" alt="vue-macros" >
  <a class="font-mono" href="https://vue-macros.dev/features/named-template.html#namedtemplate">
    namedTemplate
  </a>
</p>

<p
  v-click="[2,4]"
  class="flex items-center transition-800 w-580px lh-2 text-coolgray-300/50 text-6"
>
  <div class="text-12 mr-4" i-logos:vueuse />
  <a class="font-mono" href="https://vueuse.org/core/createReusableTemplate/">
    createReusableTemplate
  </a>
</p>

<p
  v-click="[3,4]"
  class="flex items-center transition-800 w-580px lh-2 text-coolgray-300/50 text-6"
>
  <div class="text-12 mr-4" i-carbon-logo-github />
  <a class="font-mono" href="https://github.com/hunyan-io/vite-plugin-vue-nested-sfc">
    vite-plugin-vue-nested-sfc
  </a>
</p>


```vue {hide|*|3,6|hide}{at: 4, lines: true, class:'!mt-6 transition-800'}
<template>
  <dialog v-if="showInDialog">
    <!-- something complex -->
  </dialog>
  <div v-else>
    <!-- something complex -->
  </div>
</template>
```

```vue {hide|2-4,8-10|13,16|hide}{at: 6, lines: true, class:'transition-800'}
<script setup>
import { createReusableTemplate } from '@vueuse/core'

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <DefineTemplate>
    <!-- something complex -->
  </DefineTemplate>

  <dialog v-if="showInDialog">
    <ReuseTemplate />
  </dialog>
  <div v-else>
    <ReuseTemplate />
  </div>
</template>
```

```vue {hide|3-4,5-6,10-13,15,17-18|hide}{at: 8, lines: true, class:'transition-800'}
<script setup lang="ts">
import { createReusableTemplate } from '@vueuse/core'
// 得到 `DefineTemplate` 和 `ReuseTemplate` 一对方法
const [DefineFoo, ReuseFoo] = createReusableTemplate<{ msg: string }>()
// 你可以创建多个可重用的模板
const [DefineBar, ReuseBar] = createReusableTemplate<{ items: string[] }>()
</script>

<template>
  <DefineFoo v-slot="{ msg }">
    <!-- `msg` 类型限定为 `string` -->
    <div>Hello {{ msg.toUpperCase() }}</div>
  </DefineFoo>

  <ReuseFoo msg="World" />

  <!-- 类型错误！ -->
  <ReuseFoo :msg="1" />
</template>
```

<p v-click="[8, 9]" class="flex flex-col transition-800 w-auto lh-2 text-coolgray-300/80 text-4">
  这种方案已经能很好地实现组件内的模板逻辑重用，但它的初衷也不是导向 “一个文件，多个组件”。
</p>

```html {hide|*|hide}{at: 9, lines: true, class:'transition'}
<template>
  <h1>Home</h1>
  <Counter />
</template>

<component name="counter">
  <script lang="ts" setup>
    import { ref } from 'vue';
    const count = ref(0);
  </script>

  <template>
    <button type="button" @click="count++">count is {{ count }}</button>
  </template>
</component>
```

<p v-click="[9, 10]" class="flex flex-col transition-800 w-auto lh-2 text-coolgray-200 text-4">
  <span>
    <code>vite-plugin-nested-sfc</code> 可能是这个需求上完成度相对最高的方案。
  </span>
  
  但正如我们刚才提到的，SFC 有很多为结构而设计的样板代码，而这些基于 SFC 的解决方案只会在现有的 “模式” 上扩展更多的特定写法，也就是更多的样板代码。同时更严重的问题是 SFC 本身一个文件一个组件的初衷也被打破了，相关工具链所需要做出的调整将会引发不小的变动。
</p>

<p v-click="10" class="flex flex-col flex-1 items-center justify-center transition-800 w-auto lh-2 text-6">
  <span class="text-green-200/90 mb-6">
    “一个文件，多个组件”
  </span>
  <span class="text-coolgray-100/90 mb-6">
    对现阶段的工具链来说，会是一个新需求、新问题。
  </span>
  <span class="text-base text-coolgray-100/60 mb-6">
    说到底，或许还是因为大家觉得新开一个组件文件太麻烦了。
  </span>
  <span class="mb-6">
    所以我决定尝试开启一个
    <span class="text-amber-200/90">为了更自由地定义组件的全新模式，</span>
  </span>
  <span class="text-amber-200/90 mb-6">
    同时对应地提供所需的工具链支持方案。
  </span>
</p>

<!--
这里罗列了一些我觉得和这个问题相关度比较高的解决方案。

[click] 对于抽取可以复用的模板，Vue Macros 和 VueUse 演化出了一套方案。

[click]

[click] 对于 SFC 支持定义多个组件，社区有同学做了 nested SFC 插件来支持。我们来逐个了解下他们是怎么设计的。

[click] 假如你的模板上有两个几乎完全重复的部分，只是因为条件分支而被迫要写两次，那么你肯定想重用这个部分的模板。

因为你可能会觉得单单为了视图的模板而拆一个组件似乎有写没必要，拆组件的时候往往我们还会连带着想这个组件需要接收什么参数。

[click] 
[click] 
[click] 
[click] 

当然你还可以给这个可重用的部分传入参数

... 「 读 PPT 底部文案 」但是组件并不是只有视图，对吧？

... 即使给了你传参的能力，它也并不是说要让你把这个可重用的部分当作一个真正意义上的组件。

[click] ...「 读 PPT 底部文案 」当我一开始调研这个需求、并发现有这样一个解决方案的时候还是蛮惊喜的，但是浏览完这一套写法和模式之后，我还是觉得不应该建立在 SFC 的基础之上，这个事儿可以做得更简单，更直接。我也确实不想在现有的工具链上大肆折腾一番，而只是为了一个和 SFC 设计初衷完全不符的需求。

[click] 那么我们可以确定的是，我们要从非常基础的部分做起，可能很多东西都要自己重新实现一遍。
-->
