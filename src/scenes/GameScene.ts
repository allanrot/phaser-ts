import { Cat } from "@objects/CatObject";
import { CursorsUtil } from "@utils/Cursors";

export class GameScene extends Phaser.Scene {
  platforms: Phaser.Physics.Arcade.StaticGroup;
  cat: Cat;
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
    CursorsUtil.handle(this.cursors, this.cat);
  }

  private createPlatform(): void {
    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(156, 536, 'background').setScale(3).refreshBody();
    this.platforms.create(256, 536, 'background').setScale(3).refreshBody();
    this.platforms.create(384, 536, 'background').setScale(3).refreshBody();
    this.platforms.create(512, 536, 'background').setScale(3).refreshBody();
    this.platforms.create(640, 536, 'background').setScale(3).refreshBody();
    this.platforms.create(638, 175, 'ground');
    this.platforms.create(50, 325, 'ground');
  }

  private createCat(): void {
    this.cat = new Cat(this, 100, 100, this.platforms);
    this.cat.init();
  }
}
