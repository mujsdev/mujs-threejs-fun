import * as THREE from "three";

import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { useEffect } from "react";

export const useThreeDTextDonuts = (
  canvasRef: React.RefObject<HTMLCanvasElement | null>
) => {
  useEffect(() => {
    if (!canvasRef.current) return;

    // Canvas
    const canvas = document.querySelector("canvas.webgl") as HTMLCanvasElement;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#fad161");

    // Axis helper
    const axesHelper = new THREE.AxesHelper();
    // scene.add(axesHelper);

    // Textures
    const textureLoader = new THREE.TextureLoader();
    const matCapTexture = textureLoader.load("./textures/matcaps/2.png");
    matCapTexture.colorSpace = THREE.SRGBColorSpace;

    const minecraftTexture = textureLoader.load("/textures/minecraft.png");
    minecraftTexture.colorSpace = THREE.SRGBColorSpace;
    minecraftTexture.generateMipmaps = false;
    minecraftTexture.minFilter = THREE.NearestFilter;
    minecraftTexture.magFilter = THREE.NearestFilter;

    // Fonts
    const fontLoader = new FontLoader();
    fontLoader.load("/fonts/helvetiker_regular.typeface.json", (font) => {
      const textMaterial = new THREE.MeshMatcapMaterial({
        matcap: matCapTexture,
      });
      const textGeometry = new TextGeometry("mujs.dev", {
        font,
        size: 0.5,
        depth: 0.2,
        curveSegments: 5,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 4,
      });
      textGeometry.computeBoundingBox();
      textGeometry.center();

      const text = new THREE.Mesh(textGeometry, textMaterial);
      scene.add(text);

      const minecraftMaterial = new THREE.MeshBasicMaterial({
        map: minecraftTexture,
      });
      const geometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45);

      for (let i = 0; i < 300; i++) {
        const donut = new THREE.Mesh(geometry, minecraftMaterial);

        donut.position.set(
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10
        );

        donut.rotation.x = Math.random() * Math.PI;
        donut.rotation.y = Math.random() * Math.PI;

        const scale = Math.random();
        donut.scale.set(scale, scale, scale);

        scene.add(donut);
      }
    });

    // Sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    window.addEventListener("resize", () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    // Camera
    // Base camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.set(0, 0, 3);
    scene.add(camera);

    // Controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Animations
    const tick = () => {
      renderer.render(scene, camera);
      window.requestAnimationFrame(tick);
    };
    tick();
  }, [canvasRef]);
};
