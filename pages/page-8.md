<h2 class="font-bold text-coolGray">
  “众人拾柴”
</h2>

<p v-click="[0,1]" class="flex flex-col w-auto lh-2 text-coolgray-100 text-4 transition-800">
  <div class="flex items-center mt2 mb2">
    Vue Vine 一开始的确只是一个以学习为主要目标的项目，但是我们也不甘心只是玩具而已。
  </div>
  <div class="flex items-center mt2 mb2">
    虽然这并不是一个关键的痛点问题，但我想总有人可能会需要，我就想要坚持下去。<br>
    至于是不是能够按照 Anthony Fu 的 Set Theory 所讲的一步步破圈进化，都是事在人为。
  </div>

  <div 
    class="
      flex items-center justify-center
      absolute w-300px h-300px rounded-full
      border-2px border-blue-4 bg-blue-4:20
      bottom--140px left-30px transform-gpu 
    "
  >
    <div class="opacity-62 text-12 mr-2" i-logos:react />
  </div>
  <div 
    class="
      flex items-center justify-center
      absolute w-300px h-300px rounded-full
      border-2px border-emerald-600 bg-emerald-6:20
      bottom-40px left-150px transform-gpu 
    "
  >
    <div class="opacity-62 text-12 mr-2" i-logos:vue />
  </div>

  <div class="absolute overflow-y-auto right-30px w-360px h-300px top-40%">
    <img 
      class="w-full"
      src="/assets/twitter-post.png"
    />
  </div>
</p>

<p v-click="[1,2]" class="flex flex-col w-auto lh-2 text-coolgray-100 text-4 transition-800">
  <div class="flex items-center mt2 mb2">
    起初这一切都只是我自己的独行之旅，但我不想把开源做成一个人的自嗨
  </div>
  <div class="flex items-center mt2 mb2">
    一路前行有许多朋友一同参与了进来
  </div>
  <div class="flex flex-col mt6 w-full">
    <div class="w-600px flex items-center pb2 text-coolgray-300 w-full border-b-1px border-b-solid border-b-bluegray-200/50">
      <div class="animate-bounce animate-count-infinite animate-duration-0.5s text-6 mr-2" i-twemoji:heart-suit />
      非常感谢以下 Vue Vine 现有团队成员和所有贡献者
    </div>
    <div class="flex items-center flex-wrap">
      <Contributors />
    </div>
  </div>
</p>

<div v-click="2" class="flex flex-col mt4">
  <p class="my1!">围绕着我们起初的目标，一点一滴的开发逐渐汇聚出如下的架构图景 ...</p>
  <p class="flex items-center mt1 mb2">
    如果你对这个方案感兴趣，这里还有大量的机会等着你一起来参与！
    <div class="animate-bounce animate-count-infinite animate-duration-0.5s text-6 mr-2" i-twemoji:hugging-face />
  </p>
</div>

<p v-click="2" class="flex flex-col w-auto lh-2 text-coolgray-100 text-4 transition-800 my0!">
  <img src="/assets/vue-vine-arch.svg" class="max-w-460px h-300px" />
</p>

<!--
事实上，我从一开始就明白这个项目、这个解决方案只是为了解决一个很小众的需求，或许就如这个图里所看到的一样只是那部分和我一样喜欢 Vue 又喜欢 React 函数组件形式的人。

但我也并不觉得这有什么不好，同时也想把一个技术作品做得尽可能更有趣一点、更丰富一点，所以有了今天的 vue-vine monorepo 的很多个 package

[click]

一个人的努力终归是有限的，而这也是我为什么热爱开源社区，你总能找到许多志同道合、可以一起合作完成一件事的伙伴！非常感谢 Vue Vine 团队现在的成员们和所有给我们贡献过代码的朋友们！

[click]

随着一步步的迭代，演化出了现在这样一幅架构图，但是实际上我们仍然处于非常早期的阶段，这里存在着许多不足，但也同样意味着很多机会。我诚恳地邀请有兴趣的同学一起加入我们共同建设。
-->
