import * as THREE from 'https://cdn.skypack.dev/three@0.130.0'
// import { OrbitControls } from 'https://cdn.skypack.dev/three@0.130.0/examples/jsm/controls/OrbitControls.js'

let scene, camera, renderer, controls, sphere, particleMesh

// Canvas
let canvas = document.querySelector('canvas.threeweb')

// Mouse
document.addEventListener('mousemove', animateParticles)
let mouseX = 0
let mouseY = 0

function animateParticles(event) {
    mouseY = event.clientY
    mouseX = event.clientX
}


function init() {
    scene = new THREE.Scene()

    // Camera
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        100)
    camera.position.x = 0
    camera.position.y = 0
    camera.position.z = 50
    scene.add(camera)
        // Render
    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        // renderer.setClearColor(new THREE.Color('#ffffff'), .3);
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = 2

    document.body.appendChild(renderer.domElement)
        // controls = new OrbitControls(camera, renderer.domElement)


    // CAT object
    const geometry = new THREE.SphereGeometry(10, 4, 2)
        // const texture = new THREE.TextureLoader().load('model/green5.jpg')
        // const material = new THREE.MeshBasicMaterial({ map: texture })
    const material = new THREE.LineBasicMaterial({
        color: 0xffffff,
        linewidth: 1
    });
    // sphere = new THREE.Mesh(geometry, material)
    sphere = new THREE.Line(geometry, material)
    sphere.rotation.x = 0.3;
    sphere.position.y = 5
    scene.add(sphere);


    // particle
    const particlesGeometry = new THREE.BufferGeometry
    const particlesCnt = 5000

    const posArray = new Float32Array(particlesCnt * 3)
        // xyz, xyz, xyz, xyz

    for (let i = 0; i < particlesCnt * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 200
    }
    // const texture = new THREE.TextureLoader().load('model/diamond_s.png')
    const material2 = new THREE.PointsMaterial({
        size: 0.1,
        // map: texture,
        // transparent: true
        // color: 'rgb(28, 163, 155)'
    })
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
    particleMesh = new THREE.Points(particlesGeometry, material2)
    scene.add(particleMesh)




    const pointLight = new THREE.PointLight(0xffffff, 0.1)
    pointLight.position.x = 2
    pointLight.position.y = 3
    pointLight.position.z = 4
    scene.add(pointLight)

}


function animate() {
    requestAnimationFrame(animate)
        // controls.update()
    sphere.rotation.y += 0.01
        // particleMesh.rotation.y += 0.001
        // if (mouseX > 0) {
        //     particleMesh.rotation.x = -mouseY * 0.06
        //     particleMesh.rotation.y = mouseX * 0.06
        // }

    renderer.render(scene, camera)
}

init()
animate()


const brand = document.querySelector('#brand')
const brandline = CSSRulePlugin.getRule('#brand:after')
const slogan = document.querySelector('#slogan')
const t1 = gsap.timeline()

t1.from(brandline, { delay: .5, duration: 3, cssRule: { scaleX: 0 } })
t1.to(brand, { duration: 2, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', y: '30px' }, '-=3')
t1.to(slogan, { duration: 4, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', y: '30px' }, '-=2')

// RWD window
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
}

window.addEventListener('resize', onWindowResize, false)