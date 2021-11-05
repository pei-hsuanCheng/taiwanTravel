const plugin = require('tailwindcss/plugin')
const { setData } = require('./tailwind.function.js')
const CONFIG = require('./config.js')
const {
  fontFamily,
  lineHeight,
  spacing,
  negative,
  colors,
  borderRadius,
  fontSize,
  boxShadow
} = require('./tailwind.setting.js')

const defaultSpacing = {
  ...setData(0, 10),
  ...setData(12, 16, 2),
  ...setData(20, 100, 4)
}

const defaultNegative = {
  ...setData(-10, -1),
  ...setData(-16, -12, 2),
  ...setData(-100, -20, 4)
}

const defaultBorderRadius = {
  ...setData(1, 50)
}

const defaultFontSize = {
  24: '24px' /* use not-support */,
  20: '20px' /* use not-support */,
  15: '15px' /* use not-support */,
  13: '13px' /* use not-support */
}

const defaultColors = {
  xf: '#fff' /* use default */,
  x0: '#000' /* use default */,
  x9: '#999' /* use not-support */,
  x45: '#454545' /* use not-support */,
  x76: '#767676' /* use not-support */
}

module.exports = {
  mode: 'jit',
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body:
        fontFamily ||
        'arial, "微軟正黑體", "Microsoft JhengHei", "Heiti TC", "黑體", sans-serif'
    },
    screens: {
      mLandscape: [
        {
          raw: `(max-width: ${
            CONFIG.mobileMaxWidth - 1
          }px) and (orientation: landscape) and (min-width: 480px)
          , (max-width: 999px) and (max-height: 428px) and (orientation: landscape) and (orientation: landscape) and (min-width: 480px)`
        }
      ],
      m: [
        {
          raw: `(max-width: 1000px) and (max-height: 428px) and (orientation: landscape), (max-width: ${
            CONFIG.mobileMaxWidth - 1
          }px)`
        }
      ],
      t: [
        {
          raw: `(min-width: ${CONFIG.mobileMaxWidth}px) and (max-width: 1001px) and (min-height: 428px)`
        }
      ],
      tm: [
        {
          max: '1001px'
        }
      ],
      pt: [
        {
          raw: `(min-width: ${CONFIG.mobileMaxWidth}px) and (min-height: 428px)`
        }
      ],
      pMin: [
        {
          min: '1001px',
          max: `${CONFIG.desktopMinWidth}px`
        }
      ],
      p: [
        {
          min: '1001px'
        }
      ],
      pMax: [
        {
          min: `${CONFIG.desktopMinWidth + 1}px`
        }
      ]
    },
    extend: {
      spacing: {
        ...defaultSpacing,
        ...spacing,
        ...defaultNegative,
        ...negative
      },
      lineHeight: {
        default: lineHeight || 1.5
      },
      zIndex: {
        ...setData(-1, 10, 1, null)
      },
      borderRadius: {
        ...defaultBorderRadius,
        ...borderRadius
      },
      borderWidth: {
        ...defaultSpacing,
        ...spacing
      },
      colors: {
        ...defaultColors,
        ...colors
      },
      textColor: {
        ...defaultColors,
        ...colors
      },
      boxShadow: {
        ...boxShadow
      }
    },
    fontSize: {
      ...{
        vmp: `${(16 / CONFIG.desktopMinWidth) * 100}vw`,
        vmt: `${(16 / 768) * 100}vw`,
        vmm: `${(16 / CONFIG.basicMobileWidth) * 100}vw`,
        vmmls: `${((16 / CONFIG.basicMobileWidth) * 100) / 1.77}vw`
      },
      ...defaultFontSize,
      ...fontSize
    },
    backgroundColor: (theme) => ({
      ...theme('defaultColors'),
      ...theme('colors')
    })
  },
  variants: {},
  plugins: [
    plugin(({ addVariant, e }) => {
      addVariant('not-first-child', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(
            `not-first-child${separator}${className}`
          )} > *:not(:first-child)`
        })
      })
    })
  ]
}
