import { SkyMesh } from "three/addons/objects/SkyMesh.js";
import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";
import * as THREE from "three/webgpu";

const sky = new SkyMesh();
const sun = new THREE.Vector3();
const sunLight = new THREE.DirectionalLight(0xffffff, 10);

const controller = {
  turbidity: 10,
  rayleigh: 3,
  mieCoefficient: 0.005,
  mieDirectionalG: 0.7,
  elevation: 42,
  azimuth: -55,
};

export function initSky(scene: THREE.Scene, gui: GUI, helper: boolean = false) {
  sky.scale.setScalar(450000);
  initSunLight(scene, helper);

  gui.add(controller, "turbidity", 0.0, 20.0, 0.1).onChange(guiChanged);
  gui.add(controller, "rayleigh", 0.0, 4, 0.001).onChange(guiChanged);
  gui.add(controller, "mieCoefficient", 0.0, 0.1, 0.001).onChange(guiChanged);
  gui.add(controller, "mieDirectionalG", 0.0, 1, 0.001).onChange(guiChanged);
  gui.add(controller, "elevation", 0, 90, 0.1).onChange(guiChanged);
  gui.add(controller, "azimuth", -180, 180, 0.1).onChange(guiChanged);

  guiChanged();
  scene.add(sky);
}

function initSunLight(scene: THREE.Scene, helper: boolean = false) {
  sunLight.color.setHSL(0.1, 1, 0.95);
  sunLight.position.copy(sun);
  sunLight.position.multiplyScalar(300);

  sunLight.castShadow = true;
  sunLight.shadow.mapSize.width = 2048 * 2;
  sunLight.shadow.mapSize.height = 2048 * 2;
  sunLight.shadow.camera.far = 4000;
  sunLight.shadow.bias = -0.0001;
  sunLight.shadow.radius = 1;

  const d = 75;
  sunLight.shadow.camera.left = -d;
  sunLight.shadow.camera.right = d;
  sunLight.shadow.camera.top = d * 1.5;
  sunLight.shadow.camera.bottom = 0;

  if (helper) {
    const helper = new THREE.CameraHelper(sunLight.shadow.camera);
    scene.add(helper);
  }

  const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 5);
  hemiLight.color.setHSL(0.6, 1, 0.6);
  hemiLight.groundColor.setHSL(0.095, 1, 0.75);
  hemiLight.position.set(0, 500, 0);

  scene.add(hemiLight);
  scene.add(sunLight);
}

function guiChanged() {
  sky.turbidity.value = controller.turbidity;
  sky.rayleigh.value = controller.rayleigh;
  sky.mieCoefficient.value = controller.mieCoefficient;
  sky.mieDirectionalG.value = controller.mieDirectionalG;

  const phi = THREE.MathUtils.degToRad(90 - controller.elevation);
  const theta = THREE.MathUtils.degToRad(controller.azimuth);
  sun.setFromSphericalCoords(1, phi, theta);

  sunLight.position.copy(sun);
  sunLight.position.multiplyScalar(300);
  sky.sunPosition.value.copy(sun);
}
