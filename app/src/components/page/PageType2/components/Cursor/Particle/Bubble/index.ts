import style from './style';
import Particle from '..';

class Bubble extends Particle {
  constructor(x: number, y: number) {
    super(style);
    this.lifeSpan = 250; // milliseconds
    this.position = { x: x - 10, y: y - 10 };
    this.velocity = { x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 10), y: Math.random() * -1 + -0.4 };

    this.update();
    document.body.appendChild(this.element);
  }

  public update = (): boolean => {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.velocity.x += ((Math.random() < 0.5 ? -1 : 1) * 2) / 75;
    this.velocity.y -= Math.random() / 600;

    return super.update(() => {
      this.element.style.transform = `translate3d(${this.position.x}px, ${this.position.y}px, 0) scale(${0.2 + (250 - this.lifeSpan) / 250})`;
    });
  };
}

export default Bubble;
