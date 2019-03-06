import app, { Component } from 'apprun';
import Test from './TestClass'

export default class HomeComponent extends Component {
  test: Test;

  state = 'Home';

  view = (state) => {
    return <div>
      <h1>{state}</h1>
      <input/>
    </div>
  }

  update = {
    '#,#Home': state => state,
  }

  rendered = () => {
    const input = document.querySelector('input')
    this.test = new Test(input);
  }

  unload = () => {
    this.test.destroy();
    this.test = null;
  }
}

