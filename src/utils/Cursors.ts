import { Directions } from "src/domain/enums/Direction.enum";

export class CursorsUtil {
    // Player is current a Cat, but could be any other playable character
    // TODO: Maybe create an interface for playable characters
    static handle(cursors: Phaser.Types.Input.Keyboard.CursorKeys, player: any) {
        if (cursors.right.isDown) {
            player.walk(Directions.Right);
        }
        else if (cursors.left.isDown) {
            player.walk(Directions.Left);
        }
        else {
            player.stop();
        }
        if (cursors.up.isDown) {
            player.jump();
        }
    }
}