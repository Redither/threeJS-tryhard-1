import * as THREE from 'three';
// // Шаг 1: Создание сцены в Three.js
// var scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// // Шаг 2: Использование HemisphereLight и PointLight
// var hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x000000, 1);
// scene.add(hemisphereLight);

// var pointLight = new THREE.PointLight(0xffffff, 1);
// pointLight.position.set(0, 10, 0);
// scene.add(pointLight);


// Шаг 3: Создание объекта со скелетом и "кожей"
// var geometry = new THREE.BoxGeometry(1, 1, 1);
// var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// var mesh = new THREE.SkinnedMesh(geometry, material);

// var bones = [];
// var bone = new THREE.Bone();
// bone.position.y = 1;
// bones.push(bone);

// mesh.add(bone);

// var skeleton = new THREE.Skeleton(bones);
// mesh.bind(skeleton);

// scene.add(mesh);

// Шаг 4: Задание анимации объекту
// var mixer = new THREE.AnimationMixer(mesh);
// var danceAnimation = new THREE.AnimationClip('dance', -1, [
//   new THREE.NumberKeyframeTrack('.bones[0].scale', [0, 1, 2], [1, 2, 1]),
// ]);

// var danceAction = mixer.clipAction(danceAnimation);
// danceAction.play();

// Рендеринг сцены
// function animate() {
//   requestAnimationFrame(animate);

//   mixer.update();

//   renderer.render(scene, camera);
// }
// animate();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.05;
	cube.rotation.y += 0.03;

	renderer.render( scene, camera );
}

animate();