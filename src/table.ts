import * as THREE from "three/webgpu";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import table from "./table.glb";

export function initTable(scene: THREE.Scene) {
  const loader = new GLTFLoader();

  loader.load(
    table,
    function (gltf) {
      gltf.scene.traverse(function (node) {
        if (node) {
          node.castShadow = true;
        }
      });

      scene.add(gltf.scene);
    },
    undefined,
    function (error) {
      console.error(error);
    },
  );
}
