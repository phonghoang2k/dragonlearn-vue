import Phaser from 'phaser'
import Scene3_game3 from './scenes/Scene3_game3'
import Scene4_game3 from './scenes/Scene4_game3'
import SliderPlugin from 'phaser3-rex-plugins/plugins/slider-plugin.js';
import Slider from 'phaser3-rex-plugins/plugins/slider.js';

function launch(containerId) {
  return new Phaser.Game({
    type: Phaser.AUTO,
    width: 1000,
    height: 600,
    backgroundColor: "#ffffff",
    parent: containerId, 
    scene: [Scene3_game3]
  })
}

export default launch
export { launch }
