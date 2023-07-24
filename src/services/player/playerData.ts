import { VOCATION, VocationModel } from './playerModel'

export const dataVocation: Map<VOCATION, VocationModel> = new Map([
  // Times Naruto Clássico
  //Time 7
  [VOCATION.NARUTO, new VocationModel('Naruto', VOCATION.NARUTO, 'https://www.ntoultimate.com.br/layout/images/mini/1.png')],
  [VOCATION.SAKURA, new VocationModel('Sakura', VOCATION.SAKURA, 'https://www.ntoultimate.com.br/layout/images/mini/40.png')],
  [VOCATION.SASUKE, new VocationModel('Sasuke', VOCATION.SASUKE, 'https://www.ntoultimate.com.br/layout/images/mini/10.png')],
  //Time 8
  [VOCATION.KIBA, new VocationModel('Kiba', VOCATION.KIBA, 'https://www.ntoultimate.com.br/layout/images/mini/70.png')],
  [VOCATION.HINATA, new VocationModel('Hinata', VOCATION.HINATA, 'https://www.ntoultimate.com.br/layout/images/mini/90.png')],
  [VOCATION.SHINO, new VocationModel('Shino', VOCATION.SHINO, 'https://www.ntoultimate.com.br/layout/images/mini/210.png')],
  //Time 9
  [VOCATION.NEJI, new VocationModel('Neji', VOCATION.NEJI, 'https://www.ntoultimate.com.br/layout/images/mini/60.png')],
  [VOCATION.LEE, new VocationModel('Lee', VOCATION.LEE, 'https://www.ntoultimate.com.br/layout/images/mini/30.png')],
  [VOCATION.TENTEN, new VocationModel('Tenten', VOCATION.TENTEN, 'https://www.ntoultimate.com.br/layout/images/mini/100.png')],
  //Time 10
  [VOCATION.CHOUJI, new VocationModel('Chouji', VOCATION.CHOUJI, 'https://www.ntoultimate.com.br/layout/images/mini/180.png')],
  [VOCATION.INO, new VocationModel('Ino', VOCATION.INO, 'https://www.ntoultimate.com.br/layout/images/mini/360.png')],
  [
    VOCATION.SHIKAMARU,
    new VocationModel('Shikamaru', VOCATION.SHIKAMARU, 'https://www.ntoultimate.com.br/layout/images/mini/80.png')
  ]
])
