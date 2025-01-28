//  Buenos dias o buenas tardes en el horario que ésto sea leido
//  Decidí hacer un simulador de compras acerca de una pasteleria ya que es a lo que pienso orientar mi proyecto final.
//  Tuve que buscar algunas cosas o funciones que tal vez no habiamos visto para poder implementarlo porque no estaba logrando hacer que funcionara, por ejemplo (\n), porque me quedaba el menu de compra todo pegado y no sabia como separarlo sin hacer 20 cambios.
//  Y me ayude con mis dudas con videos de youtube y ia. 


let cuenta = 0

let postres = [
    {postre: "Macaron ", valor: 1200 },
    {postre: "Cheesecake ", valor: 15000 },
    {postre: "Crumble de Manzana ", valor: 13000 },
    {postre: "Cuorelato ", valor: 1500 },
    {postre: "Chiboust de Frutos Rojos ", valor: 17000 },
    {postre: "LemonPie ", valor: 12500 }
]



function cartaPasteleria (){
    let stockPostres = "Estas son las delicias que tenemos disponibles a la venta!\n"
    for(let i = 0; i < postres.length; i++) {
        stockPostres += `${i + 1}- ${postres[i].postre} / su valor es de ARG$${postres[i].valor}\n`
    }
    alert(stockPostres)
}

function seleccionarPostre() {
    let numeroPostre = prompt("Ingresa el numero del producto por el cual estes interesado!  1-Macaron. 2-Cheesecake, 3-Crumble de Manzana, 4-Cuorelato, 5-Chiboust de Frutos Rojos, 6-Lemon Pie")
    let postreElegido = postres[numeroPostre -1]

    if(postreElegido){
        cuenta+= postreElegido.valor
        alert(`Tu ${postreElegido.postre} será empaquetado cuidadosamente ! `)
    }else{
        alert("El producto elegido es invalido")
    }
}



function abonarCuenta() {
    let efectivo = parseFloat(prompt(`Excelente, tu cuenta final es de ${cuenta}, por favor ingresa tu efectivo para que podamos cobrarte !`))

    if (efectivo>= cuenta ) {
        let cambio = efectivo - cuenta 
        alert(`Muchas gracias por tu compra! Tu vuelto es de ARG$${cambio}`)
    }else {
        alert(`Lo siento pero tu efectivo es insuficiente.....`)
    }
}



function ejecutarCompra () {
    alert("Te damos la bienvenida a Dolce Voglie!")
    cartaPasteleria()
    seleccionarPostre()

    let continuarCompra = prompt(`Estas interesado en seguir comprando algunas delicias ? (si/no)?`)
    while(continuarCompra === "si"){
        cartaPasteleria()
        seleccionarPostre()
        continuarCompra = prompt(`Estas interesado en seguir comprando algunas delicias ? (si/no)?`)
    }

    abonarCuenta()
}


ejecutarCompra()