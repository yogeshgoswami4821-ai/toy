const API = "https://toy-backend-os0m.onrender.com/api/toys";

document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("toylist");
  if (!list) return;

  fetch(API)
    .then(res => res.json())
    .then(data => {
      list.innerHTML = "";
      data.forEach(t => {
        list.innerHTML += `
          <div style="
            background:white;
            padding:25px;
            border-radius:22px;
            text-align:center;
            box-shadow:0 20px 40px rgba(0,0,0,.12)
          ">
            <img src="${t.image}" width="120"><br><br>
            <b>${t.name}</b>
            <p>₹${t.price}</p>
            <button onclick="delToy('${t._id}')" style="
              margin-top:10px;
              background:#ff4d4d;
              color:white;
              border:none;
              padding:8px 16px;
              border-radius:16px;
              cursor:pointer
            ">Delete</button>
          </div>
        `;
      });
    });
});

function addToy(){
  fetch(API,{
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body:JSON.stringify({
      name:name.value,
      price:price.value,
      image:image.value
    })
  }).then(()=>location.reload());
}

function delToy(id){
  fetch(`${API}/${id}`,{method:"DELETE"})
    .then(()=>location.reload());
}
