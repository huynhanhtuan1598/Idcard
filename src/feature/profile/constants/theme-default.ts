import pattern1 from '../assets/theme/pattern1.png';
import pattern2 from '../assets/theme/pattern2.png';
import pattern3 from '../assets/theme/pattern3.jpg';
import pattern4 from '../assets/theme/pattern4.jpg';
import pattern5 from '../assets/theme/pattern5.jpg';

export const themeDefault: {
  [key: string]: {
    id: string;
    name: string;
    themeStyle: Object;
    headingStyle: Object;
    iconColor: string;
    color: string;
    thumbnail: string;
  };
} = {
  theme1: {
    id: 'theme1',
    name: 'Theme 1',
    thumbnail: pattern1,
    themeStyle: {
      background: `url(${pattern1}) no-repeat top -5px center`,
      color: '#fff !important',
    },
    color: '#333333',
    headingStyle: {
      color: '#333',
    },
    iconColor: '#BC8605',
  },
  theme2: {
    id: 'theme2',
    name: 'Theme 2',
    thumbnail: pattern2,
    themeStyle: {
      background: `url(${pattern2}) no-repeat bottom center`,
      backgroundSize: 'cover',
      color: '#fff !important',
    },
    color: '#ffffff',
    headingStyle: {
      color: '#ffffff',
    },
    iconColor: '#BC8605',
  },
  theme3: {
    id: 'theme3',
    name: 'Theme 3',
    thumbnail: pattern3,
    themeStyle: {
      background: `url(${pattern3}) no-repeat bottom center`,
      backgroundSize: 'cover',
      color: '#fff !important',
    },
    color: '#ffffff',
    headingStyle: {
      color: '#ffffff',
    },
    iconColor: '#BC8605',
  },
  theme4: {
    id: 'theme4',
    name: 'Theme 4',
    thumbnail: pattern4,
    themeStyle: {
      background: `url(${pattern4}) no-repeat top -5px center`,
      backgroundSize: 'cover',
      color: '#fff !important',
    },
    color: '#333333',
    headingStyle: {
      color: '#333',
    },
    iconColor: '#BC8605',
  },
  theme5: {
    id: 'theme5',
    name: 'Theme 5',
    thumbnail: pattern5,
    themeStyle: {
      background: `url(${pattern5}) no-repeat top -5px center`,
      backgroundSize: 'cover',
      color: '#fff !important',
    },
    color: '#063E4F',
    headingStyle: {
      color: '#063E4F',
    },
    iconColor: '#063E4F',
  },
};
