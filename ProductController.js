const { response } = require('express')
const { message } = require('statuses')
const database = require('./db')//importar configurações do banco de dados
const httpMsgs = require('http-msgs')

class ProductController {
    newProduct(request, response){ // requerir dados a serem inseridos no banco
        
        const {produto, preco, desc} = request.body

        console.log(produto, preco, desc)

        database.insert ({produto, preco, desc}).table("deposito").then(data => {
            console.log(data)
            response.json({message:"Produto criado com Sucesso"}) // resposta o armazenamento com sucesso
        }).catch(error =>{
            console.log(error)//caso der algum erro, será mostrado no terminal junto com o código de erro HTML
        })
    }
    listProduct(request, response){ // requerir dados a serem inseridos no banco

        database.select ("*").table("deposito").then(produto => {
            console.log(produto)
            response.json(produto) // resposta o armazenamento com sucesso
        }).catch(error =>{
            console.log(error)//caso der algum erro, será mostrado no terminal junto com o código de erro HTML
        })
    }

    listUmProduto (request,response){
        const id = request.params.id
        database.select("*").table("deposito").where ({id:id}).then(produto =>{
            if(produto == 0){
                httpMsgs.send404(request, response);
            }else{
                response.json(produto)
            }
            
        }).catch(error =>{
            console.log(error)
        })
    }

    updateProduto (request,response){
        const {id} = request.params
        const {produto,preco,desc} = request.body

        database.where({id:id}).update({produto:produto,preco:preco,desc:desc}).table("deposito").then(data =>{
            response.json({message: "Tarefa atualizada com sucesso!"})
        }).catch(error => {
            response.error(error)
        })
    }

    delProduto (request,response){
        const {id} = request.params

        database.where({id:id}).del().table("deposito").then(data => {
            response.json({message: "Produto deletado com sucesso!"})
        }).catch(error => {
            response.error(error)
        })
    }
}

module.exports = new ProductController()