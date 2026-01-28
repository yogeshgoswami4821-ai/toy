const API="https://toy-backend-os0m.onrender.com/api/toys";

document.addEventListener("DOMContentLoaded",()=>{
  const list=document.getElementById("list");
  if(!list) return;

  fetch(API)
    .then(r=>r.json())
    .then(data=>{
      list.innerHTML="";
      data.forEach(t=>{
        list.innerHTML+=`
          <div class="card">
            <img src="${t.image}" width="120"><br>
            <b>${t.name}</b>
            <p>₹${t.price}</p>
            <button class="btn" onclick="del('${t._id}')">Delete</button>
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

function del(id){
  fetch(`${API}/${id}`,{method:"DELETE"})
    .then(()=>location.reload());
}
