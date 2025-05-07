import {
  createLocalFontProcessor,
} from '@unocss/preset-web-fonts/local'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer !outline-none hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
      processors: createLocalFontProcessor(),
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
  theme: {
    colors: {
      brand: {
        beige: {

          100: '#F8F4F0',
          500: '#98908B',
        },
        grey: {
          100: '#F2F2F2',
          300: '#B3B3B3',
          500: '#696868',
          900: '#201F24',

        },
        white: '#FFFFFF',
        secondary: {

          green: '#277C78',
          yellow: '#F2CDAC',
          cyan: '#82C9D7',
          navy: '#626070',
          red: '#C94736',
          purple: '#826CB0',
        },
        other: {
          purple: '#AF81BA',
          turquoise: '#597C7C',
          brown: '#93674F',
          magenta: '#934F6F',
          blue: '#3F82B2',
          navyGrey: '#97A0AC',
          armyGreen: '#7F9161',
          gold: '#CAB361',
          orange: '#BE6C49',
        },
      },
    },
  },
})
