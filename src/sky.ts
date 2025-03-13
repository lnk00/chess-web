import { SkyMesh } from "three/addons/objects/SkyMesh.js";
import * as THREE from "three/webgpu";

export function initSky(scene: THREE.Scene) {
  const sky = new SkyMesh();
  const sun = new THREE.Vector3();

  sky.scale.setScalar(450000);
  sky.turbidity.value = 10;
  sky.rayleigh.value = 3;
  sky.mieCoefficient.value = 0.005;
  sky.mieDirectionalG.value = 0.7;

  const phi = THREE.MathUtils.degToRad(90 - 50);
  const theta = THREE.MathUtils.degToRad(315);

  sun.setFromSphericalCoords(1, phi, theta);

  sky.sunPosition.value.copy(sun);

  scene.add(sky);
}
