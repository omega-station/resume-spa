import style from './style';
import Particle from '..';
import chars from './chars';

const color: string[] = ['#D61C59', '#E7D84B', '#1B8798'];
// const color: string[] = ['orange', 'yellow', 'red'];

class FairyDust extends Particle {
  constructor(x: number, y: number) {
    super();
    this.element.style.cssText = style;
    this.element.style.color = color[Math.floor(Math.random() * color.length)];
    this.element.innerHTML = chars[Math.floor(Math.random() * chars.length)];
    this.lifeSpan = 120; // milliseconds
    this.scale = 120;
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
