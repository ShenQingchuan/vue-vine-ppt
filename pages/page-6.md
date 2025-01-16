<h2 class="font-bold text-transparent text-stroke-1 text-6xl! text-stroke-coolGray/50">
  Reveal the mask
</h2>

<div v-click="[0,1]" class="flex flex-col transition-800 w-auto lh-6 text-coolgray-300 text-4 mt-4">
  <div class="my1">
    Making a Vue component <i text-6 font-bold>as a function!</i><br>
  </div>
  <div class="my1">
    The <code>template</code> is now the return value of the component function.
  </div>
  <div class="my1">
    A JS template string prefixed with <code>vine</code>
  </div>
  <div class="my-2 text-coolgray-200/80">
    Seen as function in source code, but a Vue component object in runtime.
  </div>
  <div class="text-amber-200/90 mb-8">
    Don't try to call this function, it will be meaningless.
  </div>

````md magic-move
```vue-vine
// App.vine.ts
export function App() {
  const count = ref(1)

  return vine`
    <div>{{ count }}</div>
    <button @click="count += 1">Count + 1</button>
  `
}
```
````

</div>

<div v-click="[1,5]" class="flex flex-col transition-800 w-auto lh-6 text-coolgray-300 text-4">
  <div class="text-5 lh-10 mt-2">
    <code>.vine.ts</code> is a valid TS file so that we can leverage TS's powerful toolchain system.
  </div>
  <div class="text-5 lh-10 mt-2">
    Only some specific functions should be noticed.
  </div>
  <div v-click="2" class="mt6 flex items-stretch transition-800">
    <img
      class="h-200px object-contain" 
      src="/assets/comp-and-module-global.png"
      alt="comp-and-module-global"
    >
    <ul class="mt4 ml4 flex flex-col list-none">
      <li class="mb4 transition-800" v-click="3">
        <span class="font-bold text-amber-200/90 text-6">Yellow part:</span><br> 
        All functions returning <code>vine`...`</code> will be compiled by Vite plugin.
      </li>
      <li class="mb4 transition-800" v-click="4">
        <span class="font-bold text-emerald-200/90 text-6">Green part:</span><br> 
        The rest will be remain as is.
      </li>
    </ul>
  </div>
</div>

<div
  v-click="5"
  class="flex flex-col transition-800 w-auto lh-6 text-coolgray-300 text-4"
>
  <div class="text-cyan-200/90 mt-6">
    I'm not going to expand more details of Vine's usage today.
  </div>
  <div>
    Check our docs on <a class="text-2xl" href="https://vue-vine.dev">vue-vine.dev</a>
  </div>
  <div class="w-auto h-250px mt-4">
    <iframe
      class="vue-vine-site-iframe"
      src="https://vue-vine.dev"
      style="
        width: 1280px;
        height: 720px;
        transform-origin: left top;
        transform: scale(0.5, 0.5);
      "
    />
  </div>
</div>

<!--

So here's the solution that Vue vine provides.

We can define a component as a function, and use the template as the return value.

In today's JS ecosystem, since we have bundler toolchains like Vite, we can easily create some compile magic.

This function is seen as a function in source code, but a Vue component object in runtime.

But as a user you don't need to care about these underlying implementation details.

[click]

`.vine.ts` is just a valid TS file, nothing different from what you're familiar with.

and we're easy to integrate with existing toolchain and leverage superpower from VSCode.

[click]
a `.vine.ts` file could be treated as two parts:
The yellow parts are functions that returning `vine` template strings.

[click]
The green part is the rest of the code, which're normal TS statements.

[click]

Due to the limitation of time, we won't expand more details of Vine's usage today.

If you're interested, please read our documentation to get more details.

[Page cost: 1.5 min]
-->
