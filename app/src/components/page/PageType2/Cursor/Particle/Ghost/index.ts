import style from './style';
import Particle from '..';

class Ghost extends Particle {
  constructor(x: number, y: number) {
    super();
    this.lifeSpan = 60; // milliseconds
    this.position = { x: x - 10, y: y - 10 };

    this.update();
    document.body.appendChild(this.element);
  }

  public update = (): boolean => {
    return super.update(() => {
      this.element.style.transform = `translate3d(${this.position.x}px, ${this.position.y}px, 0)`;
      if (this.lifeSpan < this.fadePoint) {
        this.element.style.opacity = ((this.lifeSpan - 1) / (this.fadePoint - 1)).toString();
      }
    });
  };

  static addStyle(): void {
    super.createStyle(style);
  }
}

export default Ghost;
