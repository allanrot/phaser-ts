import { Cat } from "src/characters/Cat";
import { Directions } from "src/domain/enums/Direction.enum";

export class GameScene extends Phaser.Scene {
  platforms: Phaser.Physics.Arcade.StaticGroup;
  cat: any;
  cursors: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor() {
    super({ key: 'GameScene' });
  }
  
  init(): void {
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  create(): void {
    this.createPlatform();
    this.createCat();
  }

  update(): void {
    if (this.cursors.right.isDown) {
      this.cat.walk(Directions.Right);
    } else if (this.cursors.left.isDown) {
      this.cat.walk(Directions.Left);
    } else {
      this.cat.stop();
    }
    if (this.cursors.up.isDown) {
      this.cat.jump();
    }
  }

  private createPlatform(): void {
    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    this.platforms.create(600, 400, 'ground');
    this.platforms.create(50, 250, 'ground');
  }

  private createCat(): void {
    this.cat = new Cat(this, 300, 250, this.platforms);
    this.cat.create();
  }
}
