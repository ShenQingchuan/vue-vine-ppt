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
