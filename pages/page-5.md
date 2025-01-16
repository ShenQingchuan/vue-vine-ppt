<h2 class="font-bold text-transparent text-stroke-1 text-5xl! text-stroke-coolGray/50">
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

Next, let's talk about the syntax design.

I believe React style is a more natural way to define components,
because just writing a function is enough.

I really like the DX that JSX provides, but why do I abandon it in Vue Vine?

[click]

JSX is too dynamic, it's too hard to be analyzed by Vue compiler to generate optimize information.

[click]

I don't wanna lose the valuable performance benefits brought by Vue 3's optimization.

and Vue has a lot of powerful built-in features for template.

[click]

After Vue 3 providing the "script setup" pattern, 

I found that's very suitable to be put inside a function,
and I know that's the time to start.

[Page cost: 1.5 min]
-->
