// scene
const scene = new THREE.Scene();

// red cube
const cube = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 'red'});
const mesh = new THREE.Mesh(cube, material);
scene.add(mesh);

// sizes
const sizes = {
    width: 800,
    height: 600
}

// camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 4;
// camera.position.x = 3;
// camera.position.y = 1;
scene.add(camera);

// renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
