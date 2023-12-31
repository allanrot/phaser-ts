import 'phaser';
import 'assets/scss/main.scss';
import { BootScene } from '@scenes/BootScene';
import { GameScene } from '@scenes/GameScene';
import { Physics } from 'src/domain/models/Physics';
import { Colors } from 'assets/scss/colors';

export class Game extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
}

window.addEventListener('load', () => {
  const cfg: Phaser.Types.Core.GameConfig = {
    width: 832,
    height: 600,
    zoom: 1,
    type: Phaser.AUTO,
    parent: 'game',
    scene: [BootScene, GameScene],
    input: {
      keyboard: true,
    },
    physics: Physics,
    backgroundColor: Colors.background,
    render: {
      pixelArt: true,
      antialias: false,
    },
  };

  const game = new Phaser.Game(cfg);
});
