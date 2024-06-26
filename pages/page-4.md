<h2 class="font-bold text-coolGray">
  “移花接木”
</h2>

<p
  v-click.hide="1"
  class="flex items-center transition-800"
>
  <img class="mt-4 w-full h-460px object-contain" src="/assets/vue-repl-1.png" alt="vue-repl-1">
</p>

<p v-click="1" class="flex flex-col transition-800 w-auto lh-2 text-coolgray-300 text-4">
  <span class="my2">整个 <code>.vue</code> SFC 文件其实就是被编译成了一个 Vue 组件对象，</span>
  <span class="my2">因此若我们要想实现一个文件中定义多个组件，只需编译出多个组件对象即可。</span>
</p>

<v-click :at="2">

```mermaid { theme: 'neutral', themeVariables: { width: 'auto', fontFamily: 'Fira Code' }, scale: 0.8 }
flowchart LR
  vue/compiler-core --> vue/compiler-dom --> vue/compiler-sfc
```

</v-click>

<p v-click="2" class="flex flex-col transition-800 w-auto lh-2 text-coolgray-100 text-4">
  <span class="mb2">
    得益于 Vue 良好的架构设计，和 SFC 解析过程直接相关的部分其实只有 <code>@vue/compiler-sfc</code>，
  </span>
  <span class="my2 text-coolgray-400">
    它完成了编译生成代码的组装、样式处理、宏 API 的实现，
  </span>
  <span class="my2 text-coolgray-400">
    乃至是和 Vite 等构建工具的某些集成功能，比如 HMR 上下文注入，
  </span>
  <span class="my2">
    而我们完全可以在整个编译流程上替换掉这一环，自行将其客制化。
  </span>
  <span class="my2">
    相当于造一个新的 <strong><code>@vue/compiler-vine</code></strong> 出来。
  </span>
</p>

<!--
/ clicks = 0 / 打开 Vue 的 Playground，我相信大家都或多或少来用过这个编译展示工具，可以看到一个 SFC 实际最后被编译出的 JS 和 CSS 代码，其实看起来相当干净且独立。

/ clicks = 1 / 所以我们只要重复多次这个编译过程、然后把结果、也就是多个 Vue 组件对象放在一起就成了。

/ clicks = 2 / 虽然我们想要设计的写法是全新的模式，但我希望完成这件事的过程中，可以尽最大程度地利用现在工具链已有的能力，以减轻工作量。
-->
