<h2>
  <span class="text-rose-300">PROs </span> &
  <span class="text-violet-200">CONs </span>
  <span class="text-emerald-300">of SFC</span>
</h2>

<div v-click="1" class="transition-800 w-640px lh-8! text-coolgray-200 text-2xl my-4">
  SFC, the iconic feature of Vue, <br>
  even learned by other frameworks like <span class="text-orange-600">Svelte</span> & <span class="text-violet-400">Astro</span>
</div>

<div v-click="1" class="transition-800 w-640px lh-3 text-coolgray-400 font-italic my-4">
  Keep separation of concerns, keep it similar to HTML.
</div>

<div v-click="2" class="transition-800 w-640px lh-8! text-coolgray-100 text-2xl mt-8!">
  But, after years of iteration, <br>
  is SFC still the only choice we have?
</div>

<div v-click="3" class="transition-800 w-640px lh-3 text-coolgray-100 flex items-center my-4">
  <div class="text-16 mr-4" i-twemoji:thinking-face />
  <span class="text-fuchsia-300 text-6">One File, Multiple Components?</span>
</div>

<ul class="flex flex-col w-640px lh-2 text-coolgray-300/80">
  <li v-click="4" class="transition-800">Component must be one file ?? <div class="text-6 inline-block ml-2 transform-translate-y-1.2" i-twemoji:face-with-rolling-eyes /></li>
  <li v-click="5" class="transition-800">Keep switching between files is annoying !! <div class="text-6 inline-block ml-2 transform-translate-y-1.2" i-twemoji:angry-face /></li>
</ul>

<!--
[click] 

When I started learning Vue in 2018, Vue 2 was already a popular framework with a mature ecosystem and toolchain.
Until now, we all felt natural to write Vue components in SFC.

[click] 

But we do have a few different ways to write Vue components. Someone who has experience in building component libraries might vote for JSX because of its flexibility.
Actually, Vue does have not-bad support for JSX, but due to its dynamic, it's too hard to be analyzed by Vue compiler to generate optimization information.

[click]

Additionally, after my research, I found that there're indeed many users want to write multiple components in one file.

Maybe several reasons for this ...

[click]

First, is it necessary to use a single file to contain a component?
Users who complain about this are probably annoyed by always need to create a new file, which is an easy operation but breaks our heart-flow.
Many developers may start from writing a long component and then splitting, which can be very annoying when using SFC.

[click]

And then, <span class="font-bold text-amber-300">switching between files</span> in a large codebase project is even more dizzying.

Let's keep these conclusions, and see if there is any available solution in community.

[Page cost：4 min]
-->