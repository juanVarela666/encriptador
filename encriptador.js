let mensajeEncriptadoCopiado = false;

function encriptar() {

    let mensaje = document.getElementById("mensaje").value;
    if (mensaje.trim() == "") {
        return;
    }
    document.getElementById("caja1").style.display = "none";
    document.getElementById("botonCopiar").style.display = "block";

    mensaje = document.getElementById("mensaje").value;
    mensajeEncriptado = mensaje.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");

    document.getElementById("mensaje2").innerHTML = mensajeEncriptado;
}

function desencriptar() {

    document.getElementById("caja1").style.visibility = "hidden";
    document.getElementById("botonCopiar").style.display = "block";
    
    mensaje = document.getElementById("mensaje").value;
    mensajeDesencriptado = mensaje.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");

    document.getElementById("mensaje2").innerHTML = mensajeDesencriptado;
}

function copiar() {

    const botonCopiar = document.querySelector("#botonCopiar");
    const cajaDeTexto = document.querySelector("#mensaje2");

    botonCopiar.addEventListener('click', async () => {
        const textoACopiar = cajaDeTexto.value;

        cajaDeTexto.select();
        
        try {
            await navigator.clipboard.writeText(textoACopiar);
            botonCopiar.textContent = 'Texto copiado';
            document.getElementById("mensaje").value = "";
            mensajeEncriptadoCopiado = true;
            setTimeout(() => {
                botonCopiar.textContent = 'Copiar';
            }, 2000);
        } catch (error) {
        }
        });
}

document.addEventListener('DOMContentLoaded', () => {
    copiar();
});
