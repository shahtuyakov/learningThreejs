import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)




// Time
// let time = Date.now();
// const clock = new THREE.Clock();
gsap.to(mesh.position, { duration: 1, delay: 1, x: 2,});
gsap.to(mesh.position, { duration: 1, delay: 2, x: 0,});


// Animations
const tick = () => {

    // Time 

    // const currenttime = Date.now();
    // const deltaTime = currenttime - time;
    // time = currenttime;
    // // console.log(currenttime);

    // THREE CLOCK 

    // const eslapedTime = clock.getElapsedTime();


    // update object position
    
    // mesh.rotation.y 
    // mesh.position.x += 0.001;
    // mesh.rotation.y = Math.sin(eslapedTime);
    // mesh.rotation.x = Math.cos(eslapedTime);
    // mesh.rotation.z = Math.sin(eslapedTime);
    
    // camera.position.y = Math.sin(eslapedTime);
    // camera.lookAt(camera.position);



    //render

    renderer.render(scene, camera);

    window.requestAnimationFrame(tick);
    
}

tick();