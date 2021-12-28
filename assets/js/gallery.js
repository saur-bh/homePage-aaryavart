document.querySelector(".filter-controls").addEventListener("click",(e) => {
    e.stopPropagation()
    e.preventDefault()
    const prevActive = document.querySelector(".selected")
    prevActive.classList.remove("selected")
    e.target.classList.add("selected")
    const filterClass = e.target.getAttribute("data-filter")
    const gallery = document.querySelector(".slider li ul")
    const arrGallery = Array.from(gallery.children)
    if(filterClass){
        if(filterClass === "*"){
            arrGallery.forEach(item => {
                item.classList.remove("hide")
            })
        }else{
            arrGallery.forEach(item => {
                if((!item.classList.contains(filterClass) && !item.classList.contains("hide"))){
                    item.classList.add("hide")
                }else{
                    item.classList.remove("hide")
                }   
            })
        }
    }
})