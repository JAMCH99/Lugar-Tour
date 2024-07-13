document.getElementById('but').addEventListener('click',()=>{
    console.log("Bienvenido al inicio de esta página");
})

const sesion_iniciada= document.getElementById('inicio');
const login=document.getElementById('login');
const url='https://randomuser.me/api/?results=20';
async function Api(){
    
    const peticion= await fetch(url);
    const data= await peticion.json();
    const userdata=data.results[0];
    const persona={
        nombre:userdata.name.first,
        apellido:userdata.name.last
    }

    sesion_iniciada.style.display='none';
    const text=document.createElement('h3')
    text.style.color='white'
    login.style.textAlign='center'
    text.innerHTML=`${persona.nombre} ${persona.apellido}`
    login.appendChild(text);

    localStorage.setItem('datos',`${persona.nombre} ${persona.apellido}`);
}



sesion_iniciada.addEventListener('click',()=>{
Api();

})

