import * as THREE from "three/webgpu";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import pawn from "./chess_pawn.glb";

export function initPawn(scene: THREE.Scene) {
  const loader = new GLTFLoader();

  loader.load(
    pawn,
    function (gltf) {
      gltf.scene.traverse(function (node) {
        if (node) {
          node.castShadow = true;
          node.receiveShadow = true;
        }
      });

      const bbox = new THREE.Box3().setFromObject(gltf.scene);
      const currentHeight = bbox.max.y - bbox.min.y;
      const scaleFactor = 5 / currentHeight;
      gltf.scene.scale.set(scaleFactor, scaleFactor, scaleFactor);

      gltf.scene.position.set(0, 75, 0);
      scene.add(gltf.scene);
    },
    undefined,
    function (error) {
      console.error(error);
    },
  );
}
