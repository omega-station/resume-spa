import Particle from '..';
import style from './style';

class Bat extends Particle {
  constructor(x: number, y: number) {
    super();
    this.element.className = 'cursor-particle-bat';
    this.fadePoint = 50;
    this.lifeSpan = 200;
    this.scale = 100;
    this.position = { x: x - 15, y: y - 15 };
    this.velocity = { x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 2), y: Math.random() * -1 + -2.5 };

    this.setStyle(style);
    this.update();

    document.body.appendChild(this.element);
  }

  public update = (): boolean => {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.velocity.x += ((Math.random() < 0.5 ? -1 : 1) * 2) / 75;
    this.velocity.y -= Math.random() / 600;

    return super.update(() => {
      this.element.style.transform = `translate3d(${this.position.x}px, ${this.position.y}px, 0) scale(${0.2 + (250 - this.scale) / 250})`;
      if (this.lifeSpan < this.fadePoint) {
        this.element.style.opacity = ((this.lifeSpan - 1) / (this.fadePoint - 1)).toString();
      }
    });
  };
}

export default Bat;
