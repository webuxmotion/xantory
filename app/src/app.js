import axios from 'axios';
import './styles.scss';

import '../widgets/lang/templates/lang-dropdown/lang-dropdown';

import '../components/animation/animation';
import '../components/drawing/drawing';

const getSite = async () => {
  try {
    const siteUrl = "https://shafa.ua/women?search_text=Dior&sort=4";
    const result = await axios.get(siteUrl);
  
    console.log('result', result);
  } catch (error) {
    console.log('error', error);
  }
  
}

getSite();