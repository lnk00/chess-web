import * as THREE from "three/webgpu";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import table from "./chess.glb";

export function initChess(scene: THREE.Scene) {
  const loader = new GLTFLoader();

  loader.load(
    table,
    function (gltf) {
      gltf.scene.traverse(function (node) {
        if (node) {
          console.log(node);
          node.castShadow = true;
          node.receiveShadow = true;
        }
      });

      gltf.scene.scale.set(0.05, 0.05, 0.05);
      gltf.scene.position.set(0, 29.5, 0);

      scene.add(gltf.scene);
    },
    undefined,
    function (error) {
      console.error(error);
    },
  );
}
