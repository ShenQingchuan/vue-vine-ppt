<h2 class="font-bold text-coolGray">
  “众人拾柴”
</h2>

<div v-click="[0,2]" class="flex items-center mt4">
  围绕着我们起初的目标，一点一滴的开发逐渐汇聚出如下的架构图景 ...
</div>

<p v-click="[1,2]" class="flex flex-col w-auto lh-2 text-coolgray-100 text-4 transition-800">
  <img src="/assets/vue-vine-arch.svg" class="max-w-460px h-300px" />
</p>

<p v-click="[2,3]" class="flex flex-col w-auto lh-2 text-coolgray-100 text-4 transition-800">
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
