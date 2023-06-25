const warning = '#E5A700'
const error = '#E73A33'
const success = '#3ACD77'

const hexOpacity = {
  [0]: '00',
  [5]: '0D',
  [10]: '1A',
  [15]: '26',
  [20]: '33',
  [25]: '40',
  [30]: '4D',
  [35]: '59',
  [40]: '66',
  [45]: '73',
  [50]: '80',
  [55]: '8C',
  [60]: '99',
  [65]: 'A6',
  [70]: 'B3',
  [75]: 'BF',
  [80]: 'CC',
  [85]: 'D9',
  [90]: 'E6',
  [95]: 'F2',
  [100]: 'FF'
}

const globalTheme = {
  colors: { warning, error, success, hexOpacity }
}

export { globalTheme }
