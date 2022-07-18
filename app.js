var aplicacion = document.querySelector('.container')


var url = 'https://jsonplaceholder.typicode.com/users/'



fetch(url)
.then(respuesta => respuesta.json())
.then(data => {
   data.forEach(usuario => {
     console.log(usuario.name) 
    var p = document.createElement('p')
     p.innerHTML = usuario.name
     aplicacion.appendChild(p)

   });
   

})

.catch(err => console.log(err))





fetch(url)
.then(respuesta => respuesta.json())
.then(data => {
   data.forEach(usuario => {
     console.log(usuario.email) 
    var p = document.createElement('p')
     p.innerHTML = usuario.email
     aplicacion.appendChild(p)

   });
   

})

.catch(err => console.log(err))



