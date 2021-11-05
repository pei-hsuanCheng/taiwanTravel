// 自定義 spacing、negative、borderRadius 的時候需開啟 setData
// const { setData } = require('./tailwind.function.js');

const fontFamily = null

const lineHeight = null

const spacing = {}

const negative = {}

const borderRadius = {}

const fontSize = {
  60: '60px',
  50: '50px',
  20: '20px',
  18: '18px',
  16: '16px',
  14: '14px',
  12: '12px'
}

const colors = {
  xff: '#FFFFFF',
  xfffb: '#F6F7FB',
  xd2: '#D2D2D2',
  xac: '#ACACAC',
  x000c: '#0D0B0C',
  xf16c: '#FF1D6C',
  xfb2c: '#FFB72C',
  x0750: '#007350',
}

const boxShadow = {
  DEFAULT: '0px 2px 4px rgba(13, 11, 12, 0.2)',
  xl: '0px 4px 3px rgba(13, 11, 12, 0.2)'
}

module.exports = {
  fontFamily,
  lineHeight,
  spacing,
  negative,
  colors,
  borderRadius,
  fontSize,
  boxShadow
}
