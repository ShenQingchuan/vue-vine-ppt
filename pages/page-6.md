<h2 class="font-bold text-coolGray">
  “一睹芳容”
</h2>

<p v-click="[0,1]" class="flex flex-col transition-800 w-auto lh-2 text-coolgray-300 text-4">
  <span class="my1">
    简单来说这个写法就是：<i text-6 font-bold>把组件写成一个函数!</i><br>
  </span>
  <span class="my1">
    原来的 <code>template</code> 现在是组件函数的返回值，是一个以 <code>vine</code> 为前缀的 JS 模板字符串。
  </span>
  <span class="my1 text-coolgray-200/80">
    实际上这有些编译黑魔法，它虽然是个函数但是最后却会被编译成 Vue 组件对象。
  </span>
  <span class="text-amber-200/90">
    所以不要尝试调用这个函数，它将没有任何意义。
  </span>
</p>

<p v-click="[1,2]" class="flex flex-col transition-800 w-auto lh-2 text-coolgray-300 text-4">
  <span class="my1 text-6 font-bold text-emerald-300">
    若需要给组件定义 props，有两种可选的方式：
  </span>
  <span class="my1">
    第一种是给组件函数的首个形参定义类型，<br>
    默认所有 prop 都是必需的，你可以使用 <code>?</code> 标记为可选。<br>
    <span class="text-amber-200/90 font-bold">
      你必须显式地罗列出所有 prop 的名字，它们将组成最终组件对象的 props 字段
    </span>
  </span>
</p>

<p v-click="[2,3]" class="flex flex-col transition-800 w-auto lh-2 text-coolgray-300 text-4">
  <span class="my1">
    第二种是使用 <code>vineProp</code> 分别定义，这个 idea 实际上是借鉴自
    <a href="https://vue-macros.dev" class="font-bold text-fuchsia-300">Vue Macros</a>
  </span>
  <div class="flex flex-col my1">
    <span class="my1"><code>vineProp.optional</code> 可以用来指明可选</span>
    <span class="my1"><code>vineProp.withDefault</code> 可以用来设置默认值和根据值自动推导类型</span>
  </div>
</p>

<p v-click="[3,4]" class="flex flex-col transition-800 w-auto lh-2 text-coolgray-300 text-4">
  <span class="my1">
    <code>vineProp</code> 和 <code>vineProp.optional</code> 有唯一的一个形参
    <span class="font-bold text-amber-300">Validator</span>
  </span>
  <div class="flex flex-col my1">
    可以用来做 prop 值的校验，但同样也只会抛出 Warning
  </div>
  <span class="my1"><code>vineProp.withDefault</code> 则是位于第二个形参</span>
</p>

<p v-click="[4,5]" class="flex flex-col transition-800 w-auto lh-2 text-coolgray-300 text-4">
  <span class="my1">
    值得一提的是，<code>vine`...`</code> 部分本身不允许出现插值表达式，<br>
    同时模板部分的 JS 表达式中也不可以使用模板字符串，<br>
    <span class="text-coolgray-100/60">
      这是由于在 VSCode 实现这部分嵌套插值表达式的语法高亮非常困难。
    </span>
    <div class="inline-block text-6 translate-y-1" i-twemoji:face-with-tongue />
  </span>
</p>

<p v-click="[5,6]" class="flex flex-col transition-800 w-auto lh-2 text-coolgray-300 text-4">
  <span class="my1 text-6 font-bold text-emerald-300">
    而我们也为定义样式提供了相应的宏 API：<code>vineStyle</code> & <code>vineStyle.scoped</code>
  </span>
  <span class="my1">
    编译器会检查组件间的引用关系、对样式的 <code>import</code> 进行拓扑排序，保证当前组件优先级更高。<br>
    <a
      href="https://play.vuejs.org/#__PROD__eNqVUk1PwzAM/Sshl4I0tZrgNDokmCYBB0CAxCWX0nptRppESTqKqv53nHQr40OTuMV+z/azXzp6qXW8aYDOaGpzw7UjFlyjichkOWfUWUYvmOS1VsaRRcVFQVZG1SSKkxD54mgkdMTAivRbygDlSlpHaluSuUePo2sQQpEXZURxFJ0wmSbDZJyDgYNai8wBRoSk1ZTkIrPWSwHrUEzXhV59nybVdCANshIM0mSvHEPrPoR/xr6YdJ6dK6HMDJUU50z2YfqWRCe4Lqpd8TJeWyXxJqGC0VzVmgsw99px3IbR2dDLYxku834bcs40MNnl8wrytz/ya9v6HKMPBiyYDTA6Yi4zJeCSHl4+3UGL7xGsVdEIZB8AH8Eq0XiNA+2qkQXK3uMFtTfBLC7LZ7tsHUi7W8oL9cw+8BlFAxcHVv+SexqfhTq8KF5x/Bj+V333s+Cbn4YO3UJNoCTI+ZeVr6KBX172n0d99Hg="
      class="text-3 text-coolgray-100/60">如果你对此优先级处理有疑问，可以看这个 Vue SFC Playground 的示例
    </a> 
    <br>
    你还可以在如下所示样式字符串部分加上例如 <code>scss</code>、<code>less</code> 等预处理器语言名的前缀标记，
    <span class="text-coolgray-200/80">
      但这同样和 Vite 一样需要你预先在环境中安装相应的预处理器。
    </span>
  </span>
</p>

<p v-click="[6,7]" class="flex flex-col transition-800 w-auto lh-2 text-coolgray-300 text-4">
  <span class="mb4">
    这里我们整理了一个表格，展示除 <code>vineProp</code> 之外，<br>
    Vue Vine 所有的宏与原来 Vue SFC 的宏的对应关系以及目前可用状态：
  </span>

  | Vue Vine 宏 | Vue SFC 宏 | 区别 |
  | --- | --- | --- |
  | `vineEmits` | `defineEmits` | <span class="text-amber-200/90">仅支持传入事件名数组 & <a href="https://vuejs.org/api/sfc-script-setup.html#type-only-props-emit-declarations">3.3+ 新语法</a></span> |
  | `vineExpose` | `defineExpose` | <span class="text-green-200/90">使用方式完全一致</span> |
  | `vineOptions` | `defineOptions` | <span class="text-green-200/90">使用方式完全一致</span> |
  | `vineSlots` | `defineSlots` | <span class="text-green-200/90">使用方式完全一致</span> |
  | `vineModel` | `defineModel` | <span class="text-rose-200/90">暂未完全对齐官方实现，目标是与原版完全一致</span> |

</p>

<p v-click="[7,10]" class="flex flex-col transition-800 w-auto lh-2 text-coolgray-300 text-4">
  <span class="text-5 mb4 lh-10">
    <code>.vine.ts</code> 是一个合法的 TS 文件，和一般的 TS 文件在模块概念上没有区别。<br>
    在 Vue Vine 的概念下，<br>
    一个包含多个组件的文件的不同部分含义如下：
  </span>
  <div class="mt6 flex items-stretch">
    <img 
      class="h-160px object-contain" 
      src="/assets/comp-and-module-global.png"
      alt="comp-and-module-global"
    >
    <ul class="mt4 ml4 flex flex-col list-none">
      <li class="mb4 transition-800" v-click="8">
        <span class="font-bold text-amber-200/90">黄色部分：</span><br> 
        所有返回值是 <code>vine`...`</code> 的函数都会被在 Vite 插件处理阶段被编译成 Vue 组件对象。
      </li>
      <li class="mb4 transition-800" v-click="9">
        <span class="font-bold text-emerald-200/90">绿色部分：</span><br> 
        除此之外的部分在 Vite 插件处理时会原封不动，和 SFC 中的 <code>&lt;script&gt;</code> 中的语句一样。
      </li>
    </ul>
  </div>
</p>

<p
  v-click="10"
  class="flex flex-col transition-800 w-auto lh-2 text-coolgray-300 text-4"
  :class="{
    'flex-1': $clicks === 11,
  }"
>
  <span class="mb4 font-bold">
    更多关于 Vue Vine 使用方式的详细内容，请之后移步官方文档查看。
  </span>

  <div class="w-full h-364px">
    <iframe
      class="vue-vine-site-iframe"
      src="https://vue-vine.dev"
      style="
        width: 1280px;
        height: 720px;
        transform-origin: left top;
        transform: scale(0.535, 0.525);
      "
    />
  </div>
</p>

<!-- --- ↑ 上面是内容 ----- ↓ 下面是代码 --- -->

<template v-if="$clicks < 6">

````md magic-move
```vue-vine
export function App() {
  const count = ref(1)

  return vine`
    <div>{{ count }}</div>
    <button @click="count += 1">Count + 1</button>
  `
}
```
```vue-vine
export function Button(props: {
  type: 'primary' | 'info' | 'warning' | 'error'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
}) {
  const btnClasses = computed(() => [`btn-${props.type}`, `btn-${props.size}`])

  return vine`
    <button
      class="vine-btn"
      :class="btnClasses"
      :disabled="disabled"
    >
      <slot />
    </button>
  `
}
```
```vue-vine
export function Button() {
  const type = vineProp<'primary' | 'info' | 'warning' | 'error'>()
  const size = vineProp.optional<'small' | 'medium' | 'large'>()
  const text = vineProp<boolean>()
  const disabled = vineProp.withDefault(false)

  const btnClasses = computed(() => [`btn-${type.value}`, `btn-${size.value}`])
  return vine`
    <button
      class="vine-btn"
      :class="btnClasses"
      :disabled="disabled"
    >
      <slot />
    </button>
  `
}
```
```vue-vine
const ButtonTypes = ['primary', 'info', 'warning', 'error']
type ButtonType = 'primary' | 'info' | 'warning' | 'error'

export function Button() {
  const type = vineProp<ButtonType>((v) => ButtonTypes.includes(v))

  // ...
  return vine`...`
}
```
```vue-vine
export function Button() {
  const type = vineProp<'primary' | 'info' | 'warning' | 'error'>()
  const size = vineProp.optional<'small' | 'medium' | 'large'>()
  const disabled = vineProp.withDefault(false)

  return vine`
    <button
      class="vine-btn"
      :class="[
        'btn-' + type,
        'btn-' + size,
      ]"
      :disabled="disabled"
    >
      <slot />
    </button>
  `
}
```
```vue-vine
export function Button() {
  // ...
  vineStyle.scoped(scss`
    .vine-btn {
      // ...

      .btn-primary {
        background-color: $primary-bg;
        color: $primary-text;
      }
    }
  `)

  return vine`...`
}
```
````

</template>

<floating-card 
  v-click="[1,2]" 
  class="right-4 top-60% translate-y--50%"
>

```js
const Button = {
  props: {
    type: { required: true },
    size: { /* Simple prop */ },
    disabled: { type: Boolean },
  },
  // ...
}
```

</floating-card>

<floating-card 
  v-click="[2,3]" 
  class="right-4 bottom-10% translate-y-20%"
>

```js
const Button = {
  props: {
    type: { required: true },
    size: { /* Simple prop */ },
    text: { type: Boolean },
    disabled: { type: Boolean, default: false },
  },
  // ...
}
```

</floating-card>

<floating-card 
  v-click="[3,4]" 
  class="right-4 bottom-10% translate-y-20%"
>

```js
const Button = {
  props: {
    type: {
      required: true,
      validator: (v) => ButtonTypes.includes(v),
    },
  },
  // ...
}
```

</floating-card>

<floating-card 
  v-click="[5,6]" 
  class="right-4 bottom-20px rounded-2xl"
>

```js
import "/src/pages/home?type=vine-style&scopeId=1a30fb00&comp=App&lang=scss&scoped=true&virtual.scss";
import "/src/pages/home?type=vine-style&scopeId=70799c01&comp=Button&lang=css&virtual.css";
```

</floating-card>

<!--
[click] 需要显式地罗列出所有 prop 的名字意味着：你不可以直接用一个类型的名字作为 props 的类型标注，因为 Vine 编译器不内嵌 TS 编译器和上下文，无法得知某个名字的类型之中的所有字段。

[click] 对于 prop 有一个需要注意的限制，或者说特例，是 boolean 类型的默认值只能使用 `true` 或 `false` 字面量来表达而不可以用变量。这是由于 Vue 对属性的 Boolean-Cast 机制需要明确知道它是一个布尔型，同样也是因为我们不内嵌 TS 编译器所以只能要求用户指明。
-->
