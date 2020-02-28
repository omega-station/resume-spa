import style from './style';

class Emoji {
  private element: HTMLSpanElement = document.createElement('span');
  private lifeSpan: number = 1200; //ms
  private position: { x: number; y: number } = { x: 0, y: 0 };
  private velocity: { x: number; y: number } = { x: 1, y: 1 };
  private scale: number = 1500;

  public init = (x: number, y: number, char: string): void => {
    this.element.style.cssText = style;
    this.element.innerHTML = char;
    this.position = { x: x - 20, y: y - 20 };
    this.velocity.x = (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2);

    this.update();
    document.body.appendChild(this.element);
  };

  public update = (): boolean => {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.lifeSpan--;

    const isDead: boolean = this.lifeSpan < 0;

    if (isDead) {
      this.die();
      console.log('die');
    } else {
      this.element.style.transform = `translate3d(${this.position.x}px, ${this.position.y}px, 0) scale(${this.lifeSpan / this.scale})`;
    }

    return isDead;
  };

  private die = (): void => {
    this.element.parentNode && this.element.parentNode.removeChild(this.element);
  };
}

export default Emoji;
