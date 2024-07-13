const nav= document.getElementById('nav');
const sesion= localStorage.getItem('datos');
const array= [
    {id:1,imagen:'1.png', descripcion:"El Templo del Sol, un importante sitio religioso inca que ahora es parte de la Iglesia de Santo Domingo."},
    {id:2,imagen:'2.jpg', descripcion:"Una montaña con un espectacular colorido natural, ubicada en la región de Cusco."},
    {id:3,imagen:'3.png', descripcion:"Un valle fértil entre los Andes donde se encuentran pueblos tradicionales y sitios arqueológicos."},
    {id:4,imagen:'4.png', descripcion:"Un hermoso paisaje natural ubicada en Huamantay"},
    {id:5,imagen:'5.jpg', descripcion:"La plaza principal de Cusco, rodeada de importantes edificios históricos y catedrales."},
    {id:6,imagen:'6.png', descripcion:"Una de las Nuevas Siete Maravillas del Mundo, una antigua ciudad inca en la cima de una montaña."},
    {id:7,imagen:'7.png', descripcion:"Un complejo arqueológico inca ubicado en las afueras de Cusco, conocido por sus enormes piedras talladas."},
    {id:8,imagen:'8.png', descripcion:"Un mercado tradicional donde se pueden encontrar productos locales y artesanías."}
];
document.addEventListener('DOMContentLoaded',function(){
    const gallery=document.getElementById('contenedor-imagenes');
    
    array.forEach(image=>{
        const imgelemento=document.createElement('img');
        imgelemento.src=`./Estilo/imagenes/${image.imagen}`;
        imgelemento.alt=image.imagen;
     imgelemento.title=image.descripcion;
        imgelemento.id=image.id;
        imgelemento.classList="imge"
        gallery.appendChild(imgelemento);
    })  
    
    
    if(sesion!=null){
        const div = document.createElement('div');
        div.classList='div';
        const text=document.createElement('h3')
        text.style.color='white'
        
        text.innerHTML=sesion
        nav.appendChild(div)
        div.appendChild(text); 
    }
})

const inicio= document.getElementById('ini');
inicio.addEventListener('click',()=>{
localStorage.clear();
console.log("Bienvenido a la página de inicio")
})



