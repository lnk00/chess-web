import * as THREE from "three/webgpu";

export function initLights(scene: THREE.Scene) {
  const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 3);
  hemiLight.color.setHSL(0.6, 1, 0.6);
  hemiLight.groundColor.setHSL(0.095, 1, 0.75);
  hemiLight.position.set(0, 50, 0);
  scene.add(hemiLight);

  const hemiLightHelper = new THREE.HemisphereLightHelper(hemiLight, 10);
  scene.add(hemiLightHelper);

  const dirLight = new THREE.DirectionalLight(0xffffff, 5);
  dirLight.color.setHSL(0.1, 1, 0.95);
  dirLight.position.set(-1, 1.75, 1);
  dirLight.position.multiplyScalar(30);
  scene.add(dirLight);

  dirLight.castShadow = true;

  dirLight.shadow.camera.near = 8;
  dirLight.shadow.camera.far = 200;
  dirLight.shadow.mapSize.width = 2048;
  dirLight.shadow.mapSize.height = 2048;
  dirLight.shadow.bias = -0.002;
  dirLight.shadow.radius = 4;

  const d = 50;

  dirLight.shadow.camera.left = -d;
  dirLight.shadow.camera.right = d;
  dirLight.shadow.camera.top = d;
  dirLight.shadow.camera.bottom = -d;

  dirLight.shadow.camera.far = 3500;
  dirLight.shadow.bias = -0.0001;

  const dirLightHelper = new THREE.DirectionalLightHelper(dirLight, 10);
  scene.add(dirLightHelper);
}
