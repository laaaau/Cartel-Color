function load(html_url, target) {
   target.innerHTML = ''
   // peticion del archivo html
   fetch(html_url)
   // retornamos la respuesta en forma de texto
    .then((respuesta) => {
        return
    })
    // cogemos ese texto y lo ponemos
    // dentro del objetivo deseado (target)
    .then((html) => {
        target.innerHTML = html
    })
}

function apply_unique_class(classname, element){
    const elemento_con_la_clase = document.querySelector(`.${classname}`)
    elemento_con_la_clase.classList.remove(classname)
    element.classList.add(classname)
}


document.addEventListener('DOMContentLoaded', () => {
    // seleccionamos todos los enlaces
    const enlaces = document.getElementsByTagName('a')
    // agregamos una clase al primer enlace (enlace de la pagina de inicio)
    enlaces[0].classList.add('active')
    // seleccionamos el elemento que va a contener los archivos cargados (main)
    const main = document.querySelector('main')
    // iteramos sobre los enlaces
    for (let index = 0; index < enlaces.length; index++) {
        const enlace = enlaces[index];
        enlace.onclick = (event) => {
            // si el usuario cliquea
            // el enlace de inicio
            if (enlace.textContent === 'inicio') {
                location.reload()
            }
            else{
                event.preventDefault()
                load(enlace.href , main)
            }
        }
    }
})