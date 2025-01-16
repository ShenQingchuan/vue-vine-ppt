<h2 class="font-bold text-transparent text-stroke-1 text-6xl! text-stroke-coolGray/50">
  Break the mirror
</h2>

<div
  v-click.hide="1"
  class="flex items-center transition-800"
>
  <img class="mt-4 w-full h-460px object-contain" src="/assets/vue-repl-1.png" alt="vue-repl-1">
</div>

<div v-click="1" class="flex flex-col transition-800 w-auto lh-2 text-coolgray-300 text-4 my-4">
  <span class="my2"><code>.vue</code> SFC file is compiled into a Vue component object.</span>
  <span class="my2">So if we want to implement multiple components in a file, we just need to compile multiple component objects.</span>
</div>

<v-click :at="2">

```mermaid { theme: 'neutral', themeVariables: { width: 'auto', fontFamily: 'Fira Code' }, scale: 0.6 }
flowchart LR
  vue/compiler-core --> vue/compiler-dom --> vue/compiler-sfc
```

</v-click>

<div v-click="2" class="flex flex-col transition-800 w-auto lh-2 text-coolgray-100 text-4 my-4">

  - Thanks to Vue's good architecture design
  - Replace the "front-end" of this compilation process
  - Reuse `@vue/compiler-dom` to generate render function
  - Make a new compiler to retrieve other syntax

</div>

<!--
If you have ever used Vue SFC Playground, you can see the output result after compilation.

[click] 

Which is a bunch of code that related to one Vue component object.

So, supporting for multiple components in one file is actually quite easy.

[click] 

Thanks to Vue's good architecture design, it divides compiler into different layers so that we can start from anyone.

Theoretically we just need to loop this process, produce multiple component objects, and put them together.

It decreased a lot of work when creating our new toolchain.

[Page cost: 1.5 min]
-->
