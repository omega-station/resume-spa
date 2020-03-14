import { Particles, Particle as iParticle } from './Particle/utility';
import Particle from './Particle';

class Cursor {
  private type: string;
  private width: number = window.innerWidth;
  private cursor: { x: number; y: number } = { x: this.width / 2, y: this.width / 2 };
  private particles: iParticle[] = [];

  constructor(type?: string) {
    this.type = type ? type : Particle.getRandomInt(Object.keys(Particles));
  }

  public create = (): void => {
    Particles[this.type].addStyle && Particles[this.type].addStyle();
    this.bindEvents();
    this.loop();
  };

  public destroy = (): void => {
    Particle.removeStyle();
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
    this.addParticle(this.cursor.x, this.cursor.y);
  };

  private onTouchMove = (e: TouchEvent): void => {
    const length: number = e.touches.length;
    if (length > 0) {
      let i: number;
      for (i = 0; i < length; i++) {
        const touches = e.touches[i];
        this.addParticle(touches.clientX, touches.clientY);
      }
    }
  };

  private onWindowResize = (): void => {
    this.width = window.innerWidth;
  };

  private addParticle = (x: number, y: number): void => {
    const particle: iParticle = new Particles[this.type](x, y);
    this.particles.push(particle);
  };

  private updateParticles = (): void => {
    const length: number = this.particles.length;

    let i: number;
    for (i = 0; i < length; i++) {
      const particle: iParticle = this.particles[i];
      particle && particle.update() && (this.particles[i] = null);
    }

    this.particles = this.particles.filter(item => item !== null);
  };
}

export default Cursor;
