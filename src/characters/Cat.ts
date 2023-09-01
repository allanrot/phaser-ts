import { Directions } from "src/domain/enums/Direction.enum";

export class Cat {
    cat: Phaser.Physics.Arcade.Sprite;
    scene: Phaser.Scene;
    platforms: Phaser.Physics.Arcade.StaticGroup;
    velocity: number = 200;

    constructor(scene: Phaser.Scene, x: number, y: number, platforms: Phaser.Physics.Arcade.StaticGroup) {
        this.cat = scene.physics.add.sprite(x, y, 'cat');
        this.scene = scene;
        this.platforms = platforms;

        // scene.anims.create({
        //     key: 'left',
        //     frames: scene.anims.generateFrameNumbers('cat', {}),
        //     frameRate: 10,
        //     repeat: -1
        // });
        
        scene.anims.create({
            key: 'walk',
            frames: scene.anims.generateFrameNumbers('cat', {}),
            frameRate: 10,
            repeat: 1
        });
    }

    public create(): void {
        this.cat.setScale(3.5);
        this.cat.setBounce(0.2);
        this.cat.setCollideWorldBounds(true);
        this.cat.setGravityY(750);
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
            this.cat.setVelocityY(-600);
        }
    }

    public stop(): void {
        this.cat.stop();
        this.cat.setFrame(0);
        this.cat.setVelocityX(0);
    }
}