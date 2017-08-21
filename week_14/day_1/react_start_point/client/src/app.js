import React from 'react';
import ReactDOM from 'react-dom';

import PiggyBank from './components/PiggyBank'

window.onload = function(){
  ReactDOM.render(
    <PiggyBank title="Zsolt's Savings Pig" owner="Jarrod" changeAmmount={5}/>,
    document.querySelector('#app')
  );
}
