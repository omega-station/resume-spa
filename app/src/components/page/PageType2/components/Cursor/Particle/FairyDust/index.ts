import style from './style';
import Particle from '..';
import chars from './chars';

const color: string[] = ['#D61C59', '#E7D84B', '#1B8798'];

class FairyDust extends Particle {
  constructor(x: number, y: number) {
    super(style);
    this.element.style.color = Particle.getRandomInt(color);
    this.element.innerHTML = Particle.getRandomInt(chars);
    this.lifeSpan = 480; // milliseconds
    this.scale = 480;
    this.position = { x: x - 20, y: y - 20 };
    this.velocity = { x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2), y: 1 };

    this.update();
    document.body.appendChild(this.element);
  }

  public update = (): boolean => {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    return super.update(() => {
      this.element.style.transform = `translate3d(${this.position.x}px, ${this.position.y}px, 0) scale(${this.lifeSpan / this.scale})`;
    });
  };
}

export default FairyDust;
