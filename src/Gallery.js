import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import reducer from './Gallery.reducer';

const IMAGES = [
  'images/comfy.jpg',
  'images/farted.jpg',
  'images/hate.jpg',
  'images/lolcat_airplane.jpg',
  'images/mocked.jpg',
  'images/monorail.jpg',
];

let store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class Gallery extends React.Component {
  select(idx) {
    store.dispatch({
      type: 'select',
      index: idx
    });
  }
  render() {
    let state = store.getState();
    let currentImage = state.images[state.currentIndex];
    let next = () => store.dispatch({type: 'next'});
    let prev = () => store.dispatch({type: 'previous'});
    return (
      <div>
        <button onClick={prev}>
          Previous
        </button>
        <button onClick={next}>
          Next
        </button>
        <br/>
          <img src={currentImage} key={currentImage}/>
        <div>
          {state.images.map((imageUrl, idx) =>
            <img key={idx} src={imageUrl} height="60" onClick={() => this.select(idx)}/>
          )}
        </div>
      </div>
    );
  }
}

function display() {
  ReactDOM.render(
    <Gallery/>,
    document.getElementById('root')
  );
}
store.subscribe(display);
display();

store.dispatch({
  type: 'receive_images',
  images: IMAGES
});
