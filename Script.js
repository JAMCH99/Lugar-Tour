

const nav= document.getElementById('nav');
const sesion= localStorage.getItem('datos');

// vecto de los lugares turisticos
const lugaresTuristicosCusco = [
    {
        imagen:'6.png',
        lugar: "Machu Picchu",
        descripcion: "Una de las Nuevas Siete Maravillas del Mundo, una antigua ciudad inca en la cima de una montaña.",
        categoria: "Arqueología"
    },
    {
        imagen:'7.png',
        lugar: "Sacsayhuamán",
        descripcion: "Un complejo arqueológico inca ubicado en las afueras de Cusco, conocido por sus enormes piedras talladas.",
        categoria: "Arqueología"
    },
    {
        imagen:'3.png',
        lugar: "Valle Sagrado de los Incas",
        descripcion: "Un valle fértil entre los Andes donde se encuentran pueblos tradicionales y sitios arqueológicos.",
        categoria: "Naturaleza"
    },
    {
        imagen:'1.png',
        lugar: "Qorikancha",
        descripcion: "El Templo del Sol, un importante sitio religioso inca que ahora es parte de la Iglesia de Santo Domingo.",
        categoria: "Arqueología"
    },
    {
        imagen:'2.jpg',
        lugar: "Montaña de Siete Colores",
        descripcion: "Una montaña con un espectacular colorido natural, ubicada en la región de Cusco.",
        categoria: "Naturaleza"
    },
    {
        imagen:'5.jpg',
        lugar: "Plaza de Armas",
        descripcion: "La plaza principal de Cusco, rodeada de importantes edificios históricos y catedrales.",
        categoria: "Histórico"
    },
    {
        imagen:'8.png',
        lugar: "Mercado de San Pedro",
        descripcion: "Un mercado tradicional donde se pueden encontrar productos locales y artesanías.",
        categoria: "Cultura"
    },
    {
        imagen:'4.png',
        lugar: "Laguna de Huamantay",
        descripcion: "Un hermoso paisaje natural ubicada en Huamantay",
        categoria: "Arqueología"
    }
];

// para llenar dinamicamente la tabla
document.addEventListener('DOMContentLoaded',()=>{
    const tabla =document.querySelector("#tabla tbody");
    lugaresTuristicosCusco.forEach(elemento=>{
        const tr= document.createElement('tr');

        const tdimagen= document.createElement('td');
        const imagen= document.createElement('img');
        imagen.src=`./Estilo/imagenes/${elemento.imagen}`;
        imagen.alt=elemento.imagen;
        tdimagen.appendChild(imagen);
        tr.appendChild(tdimagen);

        const tdlugar= document.createElement('td');      
        tdlugar.textContent=elemento.lugar;
        tr.appendChild(tdlugar);
        const tddescripcion= document.createElement('td');      
        tddescripcion.textContent=elemento.descripcion;
        tr.appendChild(tddescripcion);
        const tdcategoria= document.createElement('td');      
        tdcategoria.textContent=elemento.categoria;
        tr.appendChild(tdcategoria);

        tabla.appendChild(tr);
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
console.log("Bienvenico a la página de incio")
})

// function llamar(){
// const contenedor=document.querySelectorAll('.contenedor-imagenes');
// const imagen= imagenseleccionada.querySelector('img');
 
// contenedor.forEach(imagenseleccionada=>{
// let encontrado= false;
// let des="";
//     array.forEach(id=>{
//         if(imagen.id==id.id){encontrado=true; des=id.descripcion;}
//     })
//     if(encontrado==true)
//         {
//         const texto= document.createElement('textarea');
//         texto.classList="texto-imagen";
//         texto.value=des;       
//         contenedor.appendChild(texto);
//     }
    
// })
// imagen.addEventListener('mouseover',function(){
//     texto.style.display='inline-block';
// });
// imagen.addEventListener('mouseout',()=>{
// texto.style.display='none';
// })

// }





