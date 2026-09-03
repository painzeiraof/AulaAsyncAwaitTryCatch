function prepararPedido(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("Pizza pronta!");
        }, 2000)
    });
}

async function fazerPedido(){
    console.log("Pedido realizado.");

    const pedido = await prepararPedido();

    console.log(pedido);
    console.log("Pedido Entregue");
}

fazerPedido();