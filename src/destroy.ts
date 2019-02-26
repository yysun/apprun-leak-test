export default (el: HTMLElement, fn:Function) => {
  const observer = new MutationObserver(changes => {
    changes[0].removedNodes.forEach(node => {
      if (node === el) {
        fn();
        observer.disconnect();
      }
    })
  });
  observer.observe(el.parentNode, { childList: true });
}