import React from 'react';
import ReactDOM from 'react-dom';

import CommentContainer from './containers/CommentContainer.jsx';
// import CommentList from './components/Commentlist.jsx';

window.onload = function(){
  ReactDOM.render(
    <CommentContainer />,
    document.getElementById('app')
  );
}
