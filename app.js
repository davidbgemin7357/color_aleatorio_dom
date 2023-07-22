// seleccionar los elementos del dom
const boton = document.querySelector("button");
const color = document.getElementById("color");

const generarColorHexAleatorio = () => {
    let digitos = "0123456789ABCDEF";
    let colorHex = "#";

    for (let i = 0; i < 6; i++) {
        let indiceAleatorio = Math.floor(Math.random() * 16);
        colorHex += digitos[indiceAleatorio];
    }

    return colorHex;
};

boton.addEventListener("click", () => {
    let colorAleatorio = generarColorHexAleatorio();
    // actualizar el texto
    color.textContent = colorAleatorio;
    // actualizar el color de fondo
    document.body.style.backgroundColor = colorAleatorio;
});
