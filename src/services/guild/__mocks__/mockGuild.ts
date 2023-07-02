import { IGuild } from '../guildModel'

const mockGuilds: IGuild[] = [
  {
    id: 1,
    name: 'Guilda A',
    ownerid: 123,
    creationdata: 1627500000,
    motd: 'Bem-vindos à Guilda A!',
    description: 'Uma guilda poderosa e unida.',
    guild_logo: null, // Blob vazio como exemplo
    create_ip: 19216801,
    balance: 1000,
    last_execute_points: 500,
    logo_name: 'https://media.tenor.com/MiRqSnY6aScAAAAM/rpg-pixel.gif'
  },
  {
    id: 2,
    name: 'Guilda B',
    ownerid: 456,
    creationdata: 1627600000,
    motd: 'Guilda B recrutando!',
    description: 'Junte-se à nossa guilda e conquiste a glória.',
    guild_logo: null, // Blob vazio como exemplo
    create_ip: 19216802,
    balance: 500,
    last_execute_points: 200,
    logo_name: 'https://media.tenor.com/N92QYXoeMGMAAAAC/chibi-rpg.gif'
  },
  {
    id: 3,
    name: 'Guilda C',
    ownerid: 789,
    creationdata: 1627700000,
    motd: 'Bem-vindos à Guilda C!',
    description: 'Uma guilda dedicada à exploração de dungeons.',
    guild_logo: null, // Blob vazio como exemplo
    create_ip: 19216803,
    balance: 1500,
    last_execute_points: 1000,
    logo_name: 'https://i.pinimg.com/originals/fb/ab/9e/fbab9e3d7d9bbee226ed51531278bf13.gif'
  },
  {
    id: 4,
    name: 'Guilda D',
    ownerid: 101112,
    creationdata: 1627800000,
    motd: 'Guilda D em busca de membros!',
    description: 'Venha fazer parte de uma guilda amigável e competitiva.',
    guild_logo: null, // Blob vazio como exemplo
    create_ip: 19216804,
    balance: 800,
    last_execute_points: 400,
    logo_name: 'https://i.pinimg.com/originals/12/73/43/12734387914daf14c5f8ea31ff2fe7a7.gif'
  },
  {
    id: 5,
    name: 'Guilda E',
    ownerid: 131415,
    creationdata: 1627900000,
    motd: 'Bem-vindos à Guilda E!',
    description: 'Uma guilda focada em PvP e batalhas épicas.',
    guild_logo: null, // Blob vazio como exemplo
    create_ip: 19216805,
    balance: 2000,
    last_execute_points: 1500,
    logo_name: 'https://24.media.tumblr.com/62021d7a5c3ea73da7432860ff4d9dae/tumblr_mnbaclBYCl1sr0kmzo1_500.gif'
  }
]

export { mockGuilds }
