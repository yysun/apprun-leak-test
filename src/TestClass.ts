class Leak { }
export default class TestClass {

  _leak: Leak;

  constructor(el: HTMLInputElement) {
    window['_leak'] = new Leak();
    el['_leak'] = new Leak();
    this._leak = new Leak();
    el.addEventListener('input', _ => {
      console.log(el.value);
    });
  }

  destroy() {
    this._leak = null;
    window['_leak'] = null;
    console.log('TestClass.destroy');
  }
}