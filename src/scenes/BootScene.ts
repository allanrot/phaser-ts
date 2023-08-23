import cat from '@assets/images/cat.png';

export class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  preload(): void {
    this.load.spritesheet('cat', cat, { frameWidth: 32, frameHeight: 32 });
  }

  update(): void {
    this.scene.start('GameScene');
  }
}
