/*
0 Obter um usuario
1 Obter o numero de telefone de um usuario a partir de seu Id
2 Obter o end do usuario pelo Id. 
*/

//importamos o modulo interno do node.js

const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)



function obterUsuario(callback){
    //quando der algum problema -> reject(ERRO)
    //  quando for sucesso -> Resolv
    return new Promise(function resolvePromise(resolve, reject){
    setTimeout(function() {
        //return reject(new Error('Deu ruim de vdd!'))


        return resolve( {
            id: 1,
            nome: 'Erika Faustino',
            dataNascimento: new Date()

            })

        }, 1000)
    })
}   

function obterTelefone(idUsuario){
    return new Promise(function resoverPromise( resolve, reject){

    setTimeout(() =>{
        return resolve({ 
            telefone: '999674548',
            ddd: '88'
            })
        }, 2000);
    })
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'Benjamim Constant',
            numero: '713',
            bairro:'Alto Sao Francisco',
            cidade: 'Quixadá - Ceará'
        })
    }, 2000);

}

//1 - passo adicionar o async -> automaticamente ela retornará uma Promise
main()
async function main() {
    try {
        console.time('medida-promise')
        const usuario = await obterUsuario()
        //const telefone = await obterTelefone(usuario.id)
        //const endereco = await obterEnderecoAsync(usuario.id)

        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)

        ])
        const endereco = resultado[1]
        const telefone = resultado[0]

        console.log(`
            Nome: ${usuario.nome},
            Telefone: (${telefone.ddd}) ${telefone.telefone},
            Endereco: ${endereco.rua}, ${endereco.numero}. ${endereco.bairro}. ${endereco.cidade}
        `)
        console.timeEnd('medida-promise')

    } catch(error) {
        console.log("Deu ruim", error)

    }

}







/*
function resolverUsuario(erro, usuario){
    console.log('usuario', usuario)
}




const usuarioPromise = obterUsuario()
//para manipular o sucesso usamos a funcção .then
// para manipulae os erros, usamos o .catch
//usuario -> telefone -> endereço

usuarioPromise
    .then(function(usuario) {
        return obterTelefone(usuario.id)
            .then(function resolverTelefone(result){
                return{
                    usuario:{
                        nome: usuario.nome,
                        id: usuario.id
                    },
                    telefone: result
                }
            })
    })
    .then(function(resultado){
        const endereco = obterEnderecoAsync(resultado.usuario.id)
        return endereco.then(function resolverEndereco(result){
            return{
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
        })
    })
    .then(function(resultado){
        console.log(`
            Nome: ${resultado.usuario.nome}
            Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
            Telefone: ${resultado.telefone.ddd} ${resultado.telefone.telefone}
        `)
    })
    .catch( function(error){
        console.error('Deu ruim', error)
    })




/*obterUsuario(function resolverUsuario(error, usuario) {
    if(error) {
        console.error('Deu ruim em Usuario', error)
        return;
    }  
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
        if(error1) {
            console.error('Deu ruim em Telefone', error)
            return;
        }

    obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
        if(error2){
            console.error('Deu ruin em Endereço', error)
            return;
        }

        console.log(`
        Nome: ${usuario.nome},
        Endereco: ${endereco.rua}, ${endereco.numero}
        Telefone: (${telefone.ddd}) ${telefone.telefone}

         `)
      
        }) 
    })

})*/
