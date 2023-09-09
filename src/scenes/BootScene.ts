import ground from '@assets/images/platform.png';
import background from '@assets/images/background.png';
import cat from '@assets/images/cat.png';

export class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  preload(): void {
    this.load.image('ground', ground);
    this.load.image('background', background);
    this.load.spritesheet('cat', cat, { frameWidth: 32, frameHeight: 26 });
  }

  update(): void {
    this.scene.start('GameScene');
  }
}
