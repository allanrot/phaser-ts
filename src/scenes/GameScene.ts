export class GameScene extends Phaser.Scene {
  cursors: Phaser.Types.Input.Keyboard.CursorKeys;
  cat: Phaser.GameObjects.Sprite;
  constructor() {
    super({ key: 'GameScene' });
  }

  init(): void {}

  create(): void {
    this.add.rectangle(0, 500, 800, 100, 0x9d2d9e).setOrigin(0, 0);
    
    this.cursors = this.input.keyboard.createCursorKeys();
    this.anims.create({
      key: 'walk',
      frames: this.anims.generateFrameNumbers('cat', {}),
      frameRate: 16,
      repeat: -1
    });

    this.cat = this.add.sprite(25, 25, 'cat');

    Phaser.Actions.AlignTo([this.cat], Phaser.Display.Align.CENTER);
  }

  update(): void {
    if (this.cursors.right.isDown) {
      this.cat.play('walk', true);
    } else {
      this.cat.anims.stop();
    }
  }
}
