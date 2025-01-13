<h2 class="font-bold text-transparent text-stroke-1 text-6xl! text-stroke-coolGray/50">
  Sewing bones
</h2>

<div class="flex flex-col transition-800 w-auto lh-10 text-coolgray-300 text-4 mt-4">
  <div class="my2">
    React style seems a more easy way to <span class="text-teal-100:80 font-bold">compose components</span> ...
  </div>
</div>

<div v-click="1" class="flex flex-col transition-800 w-auto lh-10 text-coolgray-300 text-4">
  <div>
    Vue template has a lot of <span class="text-orange-200:80 font-bold">optimization information</span>
  </div>
  <div>
    JSX is too flexible, Vue can't generate <span class="text-emerald-500:80 font-bold">optimization information</span>.
  </div>
</div>

<div v-click="2" class="flex flex-col transition-800 w-auto lh-10 text-coolgray-300 text-6 mt-4">
  <div class="text-amber-100/90">
    Can't we have both? A function-style to define components,
  </div>
  <div class="text-emerald-100/60">
    and not stay too far from Vue world?
  </div>
</div>

<div v-click="3" class="flex flex-col transition-800 w-auto lh-10 text-coolgray-300 text-4 mt-4">
  <div>
    Addtionally, we have "script setup" today.
  </div>
  <div>
    All the component logic can be composed there.
  </div>
</div>

<!--

I believe React users feel very comfortable with the component composition,
since writing a function is enough to define a component.

[click]

React does this to fit the UI = f(state) concept, but it's actually simpler to write and look at.

[click]

I really like this development experience, but why don't I want JSX?

First of all, I don't want to lose the valuable performance benefits brought by Vue 3's compilation optimization.

Secondly, Vue 3 introduces a lot of powerful built-in features for template.

[click]

After Vue 3 providing the "script setup" pattern, I'm sure that I found my ideal solution.

[Page cost: 1.5 min]
-->
