/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'
import customLanguage from '../assets/vue-vine.tmLanguage.json'

// @ts-expect-error
export default defineShikiSetup(() => {
  return {
    themes: {
      dark: 'vitesse-dark',
      light: 'vitesse-light',
    },
    langs: [
      'js',
      'typescript',
      'vue-html',
      'css',
      'scss',
      'sass',
      'less',
      'postcss',
      customLanguage,
    ],
  }
})