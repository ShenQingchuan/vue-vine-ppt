import { ref } from 'vue'

export function Button() {
  const type = vineProp<'primary' | 'info' | 'warning' | 'error'>()
  const size = vineProp.optional<'small' | 'medium' | 'large'>()
  const disabled = vineProp.withDefault(false)
  const foo = ref(1)

  return vine`
    <div>
      {{ foo}}
    </div>
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
