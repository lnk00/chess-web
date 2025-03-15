import { SkyMesh } from "three/addons/objects/SkyMesh.js";
import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";
import * as THREE from "three/webgpu";

const sky = new SkyMesh();
const sun = new THREE.Vector3();

const controller = {
  turbidity: 10,
  rayleigh: 3,
  mieCoefficient: 0.005,
  mieDirectionalG: 0.7,
  elevation: 2,
  azimuth: 180,
};

export function initSky(scene: THREE.Scene, gui: GUI) {
  sky.scale.setScalar(450000);
  const phi = THREE.MathUtils.degToRad(90 - 50);
  const theta = THREE.MathUtils.degToRad(315);
  sun.setFromSphericalCoords(1, phi, theta);
  sky.sunPosition.value.copy(sun);

  gui.add(controller, "turbidity", 0.0, 20.0, 0.1).onChange(guiChanged);
  gui.add(controller, "rayleigh", 0.0, 4, 0.001).onChange(guiChanged);
  gui.add(controller, "mieCoefficient", 0.0, 0.1, 0.001).onChange(guiChanged);
  gui.add(controller, "mieDirectionalG", 0.0, 1, 0.001).onChange(guiChanged);
  gui.add(controller, "elevation", 0, 90, 0.1).onChange(guiChanged);
  gui.add(controller, "azimuth", -180, 180, 0.1).onChange(guiChanged);

  scene.add(sky);
}

function guiChanged() {
  sky.turbidity.value = controller.turbidity;
  sky.rayleigh.value = controller.rayleigh;
  sky.mieCoefficient.value = controller.mieCoefficient;
  sky.mieDirectionalG.value = controller.mieDirectionalG;

  const phi = THREE.MathUtils.degToRad(90 - controller.elevation);
  const theta = THREE.MathUtils.degToRad(controller.azimuth);

  sun.setFromSphericalCoords(1, phi, theta);

  sky.sunPosition.value.copy(sun);
}
