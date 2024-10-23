/**
 * 
 * @param {String} classname 
 * @param {HTMLElement} element 
 */
function apply_unique_class(classname, element){
    const element_already_with_class = document.querySelector(`.${classname}`)
    element_already_with_class.classList.remove(classname)
    element.classList.add(classname)
}

/**
 * 
 * @param {String} html_file_url 
 * @param {HTMLElement} target 
 */
function load_unique_html(html_file_url, target){
    target.innerHTML = ''
    fetch(html_file_url)
    .then((response) => {
        return response.text()
    })
    .then((html) => {
        target.innerHTML = html})

}

document.addEventListener('DOMContentLoaded', () => {
    const links = document.getElementsByTagName('a')
    links[0].classList.add('active')
    const main = document.querySelector('main')
    for (let index = 0; index < links.length; index++) {
        const link = links[index];
        link.onclick = (event) => {
            if(link.textContent !== 'Inicio'){
                event.preventDefault()
                //event.stopPropagation()
                console.log(link.href)
                load_unique_html(link.href, main)
                apply_unique_class('active', link)
            }
            else{ 
                // reloads the webpage
                location.reload()
            }

        }
    }
})