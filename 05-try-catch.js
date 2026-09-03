function buscarProduto(id){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if(id === 1){
                resolve({id:1, nome:"Notebook, preço: 3500"});
            }else{
                reject(new Error("Produto não encontrado. "))
            }
            },1500);
          });
    }

    async function executar(){
        try{
            const produto = await buscarProduto(2);
            console.log("produto encontrado");
            console.log(produto);
        
        } catch (error) {
            console.log("Ocorreu um erro");
            console.log(error.message)
        }
    }

    executar()