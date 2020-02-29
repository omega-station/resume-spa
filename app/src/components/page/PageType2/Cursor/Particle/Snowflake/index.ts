import style from './style';
import Particle from '..';

const chars: string[] = ['❄️', '❅', '❆'];

class Snowflake extends Particle {
  constructor(x: number, y: number) {
    super(style);
    this.element.innerHTML = Particle.getRandom(chars);
    this.lifeSpan = Math.floor(Math.random() * 60) + 120; // milliseconds
    this.scale = 180;
    this.position = { x: x - 20, y: y - 20 };
    this.velocity = { x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2), y: Math.random() + 1 };

    this.update();
    document.body.appendChild(this.element);
  }

  public update = (): boolean => {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.velocity.x += ((Math.random() < 0.5 ? -1 : 1) * 2) / 75;
    this.velocity.y -= Math.random() / 400;

    return super.update(() => {
      this.element.style.transform = `translate3d(${this.position.x}px, ${this.position.y}px, 0) scale(${this.lifeSpan / this.scale}) rotate(${2 *
        this.lifeSpan}deg)`;
    });
  };
}

export default Snowflake;
