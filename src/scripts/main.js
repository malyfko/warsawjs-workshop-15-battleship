import '../styles/styles.scss';
import GameField from './GameField';

const main = () => {

  const app = document.getElementById('app');
  app.append(GameField('computer'));
  app.append(GameField('user'));
};


main();
