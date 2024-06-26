import { defineConfig } from 'unocss'

type T1 = Readonly<{ msg: string }>

export default defineConfig({
  shortcuts: {
    // Define UnoCSS shortcuts here:
    'row-flex': 'flex flex-row items-center',
    'col-flex': 'flex flex-col',
  },
})