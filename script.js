const API = "https://toy-backend-os0m.onrender.com/api/toys";

document.addEventListener("DOMContentLoaded", () => {
  const products = document.getElementById("products");
  const list = document.getElementById("list");

  if (!products && !list) return;

  fetch(API)
    .then(r => r.json())
    .then(data => {
      const box = products || list;
      box.innerHTML = "";
      data.forEach(t => {
        box.innerHTML += `
          <div class="card">
            <img src="${t.image}" width="120"><br>
            <b>${t.name}</b>
            <p>₹${t.price}</p>
            ${list ? `<button onclick="del('${t._id}')">Delete</button>` : ""}
          </div>
        `;
      });
    });
});

function addToy(){
  fetch(API,{
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body: JSON.stringify({
      name:name.value,
      price:price.value,
      image:image.value
    })
  }).then(()=>location.reload());
}

function del(id){
  fetch(`${API}/${id}`,{method:"DELETE"})
    .then(()=>location.reload());
}
