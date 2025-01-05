<h2 class="font-bold text-coolGray">
  “Feeling the water”
</h2>

<div
  v-click="[1,4]"
  class="flex items-center transition-800 w-580px lh-2 text-coolgray-300/50 text-6 my-4"
>
  <img class="w-6rem mr-4" src="https://vue-macros.dev/favicon.svg" alt="vue-macros" >
  <a class="font-mono lh-8" href="https://vue-macros.dev/features/named-template.html#namedtemplate">
    namedTemplate
  </a>
</div>

<div
  v-click="[2,4]"
  class="flex items-center transition-800 w-580px lh-2 text-coolgray-300/50 text-6 my-4"
>
  <div class="text-12 mr-4" i-logos:vueuse />
  <a class="font-mono lh-8" href="https://vueuse.org/core/createReusableTemplate/">
    createReusableTemplate
  </a>
</div>

<div
  v-click="[3,4]"
  class="flex items-center transition-800 w-580px lh-2 text-coolgray-300/50 text-6 my-4"
>
  <div class="text-12 mr-4" i-carbon-logo-github />
  <a class="font-mono lh-8" href="https://github.com/hunyan-io/vite-plugin-vue-nested-sfc">
    vite-plugin-vue-nested-sfc
  </a>
</div>


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
// Retrieves `DefineTemplate` and `ReuseTemplate` pair methods
const [DefineFoo, ReuseFoo] = createReusableTemplate<{ msg: string }>()
// You can create multiple reusable templates
const [DefineBar, ReuseBar] = createReusableTemplate<{ items: string[] }>()
</script>

<template>
  <DefineFoo v-slot="{ msg }">
    <!-- `msg` type is `string` -->
    <div>Hello {{ msg.toUpperCase() }}</div>
  </DefineFoo>

  <ReuseFoo msg="World" />

  <!-- Type error! -->
  <ReuseFoo :msg="1" />
</template>
```

<div v-click="[8, 9]" class="flex flex-col transition-800 w-auto lh-2 text-coolgray-300/80 text-4 lh-6">
  This is actually a quite good solution and it has a very self-consistent design. 
  But if what we want is a component then it's not enough due to not able to define lifecycle hooks.
</div>

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

<div v-click="[9, 10]" class="flex flex-col transition-800 w-auto lh-2 text-coolgray-200 text-4">
  <span class="my-4">
    <code>vite-plugin-nested-sfc</code> is another exploration.
  </span>
  
  - May feels fragmented when reading
  - Breaks the rule of SFC being one file one component
  - Scripts are still independent

</div>

<div v-click="10" class="flex flex-col flex-1 items-center justify-center transition-800 w-auto lh-2 text-6">
  <span class="text-green-200/90 mb-6">
    “One file, multiple components”
  </span>
  <span class="text-coolgray-100/90 mb-6 lh-10">
    It's a new requirement and problem for current toolchain <br>
    Thorough refactor is needed.
  </span>
  <span class="mb-4 lh-10">
    Maybe what we really need is <br>
    <span class="text-amber-200/90">New way to organize components</span>
  </span>
  <span class="text-amber-200/90 mb-6">
    Provide its new toolchain.
  </span>
</div>

<!--
Here're two solutions that are related to this problem.

[click] 
[click] 

The first one is “extract reusable templates”, starting from Vue Macros to VueUse.

[click] 

The second one is vue-nested-sfc, which is a Vite plugin.

Let's start with the first one, here's a demo code showing how it works.

[click] 
You may found something complex and duplicated in your template

[click] 
and you want to reuse it

[click] 
You can define a pair components, `DefineTemplate` and `ReuseTemplate`.
and move the duplicated part into the `<DefineTemplate>`

[click] 
Using `<ReuseTemplate>` for where you want to reuse it.

[click] 

You can also pass props to this reusable part, which is like passing props to a component.

But components are not only views, right? This solution seems to only give us a little sweet, but I'm not satisfied here.

[click] 

Let's see the second solution, vue-nested-sfc.

It's a quite complete solution, but the more I look into it, the more I'm convinced that the ideal solution should not be built on top of SFC.

Aspproach of making toolchain support for this design certainly be invasive to existing official version.

[click] 

I'm sure that we need a non-invasive solution and all built by ourselves.

[Page cost: 4 min]
-->
