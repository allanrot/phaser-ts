export class Cat extends Phaser.GameObjects.GameObject {
    private sprite: Phaser.GameObjects.Sprite;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, 'cat');

        this.sprite = scene.add.sprite(x, y, 'cat');

        scene.anims.create({
            key: 'walk',
            frames: scene.anims.generateFrameNumbers('cat', {}),
            frameRate: 16,
            repeat: -1
        });

        Phaser.Actions.AlignTo([this.sprite], Phaser.Display.Align.CENTER);
    }

    public walk(): void {
        this.sprite.play('walk', true);
    }

    public stop(): void {
        this.sprite.anims.stop();
    }
}