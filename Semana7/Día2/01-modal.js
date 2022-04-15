let btnModal = document.getElementById("btn-modal");

let miModal = document.getElementById("miModal");

// console.log("btnModal", btnModal);

console.log("miModal", miModal);

let bsModal = new bootstrap.Modal(miModal);

console.log("bsModal", bsModal)

btnModal.addEventListener("click", function(){
    //mas codigo

    bsModal.show()
})

//ejecuta una función después de X tiempo
//setTimeout(funcionAEjecutar, tiempo)
window.setTimeout(function(){
    bsModal.show()
}, 3000)