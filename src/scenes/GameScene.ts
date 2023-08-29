import { Cat } from "src/characters/Cat";

export class GameScene extends Phaser.Scene {
  cursors: Phaser.Types.Input.Keyboard.CursorKeys;
  cat: Cat;

  constructor() {
    super({ key: 'GameScene' });
  }
  
  init(): void {
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  create(): void {
    this.cat = new Cat(this, 25, 20);
  }

  update(): void {
    if (this.cursors.right.isDown) {
      this.cat.walk();
    } else {
      this.cat.stop();
    }
  }
}
