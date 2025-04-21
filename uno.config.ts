import { defineConfig } from 'unocss'
import presetWind4 from '@unocss/preset-wind4'
import presetAttributify from '@unocss/preset-attributify'

export default defineConfig({
    theme: {
        colors: {
            background: '#ffffff',
            foreground: '#171717',
            primary: '#D70466',
            secondary: '#EE2F66',
            tertiary: '#E61E4D',
            'bg-linear': 'linear-gradient(to right, #E61E4D 0%, #EE2F66 50%, #D70466 100%), linear-gradient(to right, #E61E4D 0%, #EE2F66 50%, #D70466 100%)'
        },
        breakpoint: {
            xs: '0px',
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
            xxl: '1400px',
        },
        font: {
            inter: 'var(--font-inter)',
            lexend: 'var(--font-lexend)',
        }
    },
    
    shortcuts: [
        [
            'container',
            // Bootstrap container style:
            'w-full mx-auto px-3 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] xxl:max-w-[1320px]',
        ],
    ],
    presets: [
        presetWind4({
            darkMode: 'class',
            reset: true
        }),
        presetAttributify(),
    ]
})