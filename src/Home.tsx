import app, { Component } from 'apprun';
import Test from './TestClass'

export default class HomeComponent extends Component {
  state = 'Home';

  view = (state) => {
    return <div>
      <h1>{state}</h1>
      <input/>
    </div>
  }

  update = {
    '#Home': state => state,
  }

  rendered = () => {
    const input = document.querySelector('input')
    const test = new Test(input);
    const observer = new MutationObserver(changes => {
      changes[0].removedNodes.forEach(node => {
        if (node === input) {
          test.destroy();
        }
        observer.disconnect();
      })
    });
    observer.observe(input.parentNode, { childList: true });

  }
}

