const correo = 'alvaroaburto71@gmail.com';
const subject = 'Consulta profesional';
const info =
  'Estimado Alvaro, me gustaría discutir una oportunidad de colaboración. ¿Podríamos hablar al respecto?';

const redes = [
  {
    titulo: 'Email',
    img: '/images/imagesRedes/redEmail.png',
    link: `mailto:${correo}?subject=${subject}&body=${info}`,
    icon: '/images/svgIcons/arrow.svg',
  },
  {
    titulo: 'Youtube',
    img: 'https://img.icons8.com/ios-filled/50/000000/youtube-play.png',
    link: 'https://github.com/LilDre7/Mi-Blog-LilDree/blob/main/src/pages/Links.astro',
    icon: '/images/svgIcons/arrow.svg',
  },
  {
    titulo: 'GitHub',
    img: 'https://img.icons8.com/ios-filled/50/000000/github.png',
    link: 'https://github.com/LilDre7',
    icon: '/images/svgIcons/arrow.svg',
  },
  {
    titulo: 'Instagram',
    img: '/images/imagesRedes/redInstagram.png',
    link: '',
    icon: '/images/svgIcons/arrow.svg',
  },
  {
    titulo: 'LinkedIn',
    img: 'https://img.icons8.com/ios-filled/50/000000/linkedin.png',
    link: 'https://www.linkedin.com/in/alvaro-aburto-dev/',
    icon: '/images/svgIcons/arrow.svg',
  },
  {
    titulo: 'Portafolio',
    img: 'https://img.icons8.com/ios-filled/50/000000/portfolio.png',
    link: 'https://lilmiporfolio.netlify.app/',
    icon: '/images/svgIcons/arrow.svg',
  },
];

export default redes;
