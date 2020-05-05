import Phaser from 'phaser'
import BootScene from './scenes/BootScene'
import Scene1 from './scenes/Scene1'
// import Scene2 from './scenes/Scene2'
// import Scene3 from './scenes/Scene3'
// import Scene4 from './scenes/Scene4'
// import Scene5 from './scenes/Scene5'
// import Scene6 from './scenes/Scene6'
import PlayScene from './scenes/PlayScene'


function launch(containerId) {
  return new Phaser.Game({
    type: Phaser.AUTO,
    width: 1000,
    height: 600,
    backgroundColor: "#ffffff",
    parent: containerId,
    scene: [BootScene, Scene1]
  })
}

export default launch
export { launch }
