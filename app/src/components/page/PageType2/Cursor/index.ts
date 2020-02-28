import getParticle from './Particle';
import chars from './Particle/chars';

class Cursor {
  private type: string;
  private charList: string[];
  private charListLength: number;
  private width: number = window.innerWidth;
  private cursor: { x: number; y: number } = { x: this.width / 2, y: this.width / 2 };
  private particles: any[] = [];

  constructor(type: string = 'emoji') {
    this.type = type;
    this.charList = type === 'emoji' ? chars.emoji : chars.snowflake;
    this.charListLength = this.charList.length;
  }

  public init = (type = 'emoji'): void => {
    this.bindEvents();
    this.loop();
  };

  public destroy = (): void => {
    this.unbindEvents();
  };

  private loop = (): void => {
    window.requestAnimationFrame(this.loop);
    this.updateParticles();
  };

  private bindEvents = (): void => {
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('touchmove', this.onTouchMove);
    document.addEventListener('touchstart', this.onTouchMove);
    window.addEventListener('resize', this.onWindowResize);
  };

  private unbindEvents = (): void => {
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('touchmove', this.onTouchMove);
    document.removeEventListener('touchstart', this.onTouchMove);
    window.removeEventListener('resize', this.onWindowResize);
  };

  private onMouseMove = (e: MouseEvent): void => {
    this.cursor.x = e.clientX;
    this.cursor.y = e.clientY;
    this.addParticle(this.cursor.x, this.cursor.y, this.getChar());
  };

  private onTouchMove = (e: TouchEvent): void => {
    const length: number = e.touches.length;
    if (length > 0) {
      let i: number;
      for (i = 0; i < length; i++) {
        const touches = e.touches[i];
        this.addParticle(touches.clientX, touches.clientY, this.getChar());
      }
    }
  };

  private onWindowResize = (): void => {
    this.width = window.innerWidth;
  };

  private addParticle = (x: number, y: number, char: string): void => {
    const particle: any = getParticle(this.type);
    particle.init(x, y, char);
    this.particles.push(particle);
  };

  private updateParticles = (): void => {
    const length: number = this.particles.length;
    let i: number;
    for (i = 0; i < length; i++) {
      const particle = this.particles[i];
      particle && particle.update() && (this.particles[i] = null);
    }
    this.particles = this.particles.filter(item => item !== null);
  };

  private getChar = (): string => {
    return this.charList[Math.floor(Math.random() * this.charListLength)];
  };
}

export default Cursor;
