export class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  init(): void {}

  create(): void {
    this.add.rectangle(0, 500, 800, 100, 0x9d2d9e).setOrigin(0, 0);
    
    this.anims.create({
      key: 'walk',
      frames: this.anims.generateFrameNumbers('cat', {}),
      frameRate: 16,
      repeat: -1
    });

    const sprite = this.add.sprite(25, 25, 'cat').play('walk');

    Phaser.Actions.AlignTo([sprite], Phaser.Display.Align.CENTER);
  }

  preload(): void {}

  update(): void {}
}
