// 🔗 Render Backend URL (already added)
const BACKEND_URL = "https://toy-backend-os0m.onrender.com";

// Load toys
fetch(`${BACKEND_URL}/api/toys`)
  .then(res => res.json())
  .then(data => {
    const box = document.getElementById("products");
    data.forEach(toy => {
      box.innerHTML += `
        <div class="card">
          <img src="${toy.image}" width="120"/>
          <h3>${toy.name}</h3>
          <p>₹${toy.price}</p>
        </div>
      `;
    });
  });

// 3D animation
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("toy3d"),
  alpha: true
});

renderer.setSize(300,300);
camera.position.z = 3;

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(),
  new THREE.MeshStandardMaterial({ color: 0xffcc00 })
);
scene.add(cube);

const light = new THREE.PointLight(0xffffff,1);
light.position.set(5,5,5);
scene.add(light);

function animate(){
  requestAnimationFrame(animate);
  cube.rotation.y += 0.01;
  renderer.render(scene,camera);
}
animate();
