class Particle {
  protected element: HTMLSpanElement = document.createElement('span');
  protected isDead: boolean = false;
  protected fadePoint: number = 50;
  protected lifeSpan: number = 0;
  protected scale: number = 0;
  protected position: { x: number; y: number } = { x: 0, y: 0 };
  protected velocity: { x: number; y: number } = { x: 0, y: 0 };

  protected setStyle = (css: string): void => {
    if (!document.querySelector('#cursor-style')) {
      const head: HTMLHeadElement = document.getElementsByTagName('head')[0];
      const style: HTMLStyleElement = document.createElement('style');

      style.type = 'text/css';
      style.innerHTML = css;
      style.setAttribute('id', 'cursor-style');

      head.appendChild(style);
    }
  };

  protected update(doElse: Function): boolean {
    this.lifeSpan--;
    this.isDead = this.lifeSpan < 0;
    if (this.isDead) {
      this.element.parentNode && this.element.parentNode.removeChild(this.element);
    } else {
      doElse();
    }
    return this.isDead;
  }

  constuctor() {
    console.log('foo');
  }
}

export default Particle;
