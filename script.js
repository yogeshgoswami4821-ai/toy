const API = "https://toy-backend-os0m.onrender.com/api/toys";

// Load toys on home & dashboard
fetch(API)
  .then(res => res.json())
  .then(data => {
    const box = document.getElementById("products") || document.getElementById("list");
    if(!box) return;
    box.innerHTML = "";
    data.forEach(t => {
      box.innerHTML += `
        <div class="card">
          <img src="${t.image}" width="120"><br>
          <b>${t.name}</b>
          <p>₹${t.price}</p>
        </div>
      `;
    });
  });

// Add toy
function addToy(){
  fetch(API,{
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body: JSON.stringify({
      name: name.value,
      price: price.value,
      image: image.value
    })
  }).then(()=>location.reload());
}
