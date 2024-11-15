import * as THREE from 'three';

        // Set up the scene, camera, and renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // Create two cubes
        const geometry = new THREE.BoxGeometry();
        const material1 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const material2 = new THREE.MeshBasicMaterial({ color: 0x0000ff });

        const cube1 = new THREE.Mesh(geometry, material1);
        const cube2 = new THREE.Mesh(geometry, material2);

        // Set positions
        cube1.position.x = -1;
        cube2.position.x = 1;

        // Set render order
        cube1.renderOrder = 1;
        cube2.renderOrder = 0;

        // Add cubes to the scene
        scene.add(cube1);
        scene.add(cube2);

        camera.position.z = 5;

        // Animation loop
        function animate() {
            requestAnimationFrame(animate);

            cube1.rotation.x += 0.01;
            cube1.rotation.y += 0.01;
            cube2.rotation.x += 0.01;
            cube2.rotation.y += 0.01;

            renderer.render(scene, camera);
        }

        animate();