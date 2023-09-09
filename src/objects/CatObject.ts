import { Directions } from "src/domain/enums/Direction.enum";

export class Cat {
    cat: Phaser.Physics.Arcade.Sprite;
    scene: Phaser.Scene;
    platforms: Phaser.Physics.Arcade.StaticGroup;
    velocity: number = 200;
    jumpVelocity: number = 600;
    scale: number = 3;
    bounce: number = 0.2;
    gravity: number = 750;

    constructor(scene: Phaser.Scene, x: number, y: number, platforms: Phaser.Physics.Arcade.StaticGroup) {
        this.cat = scene.physics.add.sprite(x, y, 'cat');
        this.scene = scene;
        this.platforms = platforms;
    }

    public create(): void {
        this.createAnimations(this.scene);
        this.cat.setScale(this.scale);
        this.cat.setBounce(this.bounce);
        this.cat.setCollideWorldBounds(true);
        this.cat.setGravityY(this.gravity);
        this.scene.physics.add.collider(this.cat, this.platforms);
    }

    public walk(direction: Directions): void {
        if (direction === Directions.Right) {
            this.cat.setFlipX(false);
            this.cat.setVelocityX(this.velocity);
        }
        if (direction === Directions.Left) {
            this.cat.setFlipX(true);
            this.cat.setVelocityX(-this.velocity);
        }
        this.cat.play('walk', true);
    }

    public jump(): void {
        if(this.cat.body.touching.down) {
            this.cat.setVelocityY(-this.jumpVelocity);
        }
    }

    public stop(): void {
        this.cat.stop();
        this.cat.setFrame(0);
        this.cat.setVelocityX(0);
    }

    private createAnimations(scene: Phaser.Scene): void {
        scene.anims.create({
            key: 'walk',
            frames: scene.anims.generateFrameNumbers('cat', {}),
            frameRate: 10,
            repeat: 1
        });
    }
}