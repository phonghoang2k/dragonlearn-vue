import Phaser from 'phaser'
import Scene3_game3 from './scenes/Scene3_game3'
import Start_game3 from './scenes/Start_game3'

import 'phaser'

function launch(containerId) {
  return new Phaser.Game({
    type: Phaser.AUTO,
    width: 1000,
    height: 600,
    backgroundColor: "#ffffff",
    parent: containerId, 
    scene: [Start_game3,Scene3_game3]
  })
}

export default launch
export { launch }
