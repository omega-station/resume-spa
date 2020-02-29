class Particle {
  protected element: HTMLSpanElement;
  protected isDead: boolean;
  protected fadePoint: number;
  protected lifeSpan: number;
  protected scale: number;
  protected position: { x: number; y: number };
  protected velocity: { x: number; y: number };

  constructor(style?: string) {
    this.element = document.createElement('span');
    this.element.className = 'cursor-particle';
    style && (this.element.style.cssText = style);

    this.isDead = false;
    this.fadePoint = 50;
    this.lifeSpan = 0;
    this.scale = 0;
    this.position = { x: 0, y: 0 };
    this.velocity = { x: 0, y: 0 };
  }

  protected update(doActions: Function): boolean {
    this.lifeSpan--;

    this.isDead = this.lifeSpan < 0;
    if (this.isDead) {
      this.element.parentNode && this.element.parentNode.removeChild(this.element);
    } else {
      doActions();
    }

    return this.isDead;
  }

  static addStyle(style: string): void {
    if (style) {
      const head: HTMLHeadElement = document.getElementsByTagName('head')[0];
      const el: HTMLStyleElement = document.createElement('style');

      el.type = 'text/css';
      el.id = 'cursor-style';
      el.innerHTML = style;

      head.appendChild(el);
    }
  }

  static getRandom = (array: any[]): any => {
    return array[Math.floor(Math.random() * array.length)];
  };
}

export default Particle;
