const{
    deepEqual,
    ok
} = require('assert')
const exp = require('constants')

const DEFAULT_ITEM_CADASTRAR = {
    nome: 'Flash',
    poder: 'Speed',
    id: '1'
}


describe('Suite de manipulação de Herois', () =>{
 it('deve pesquisar um heroi usando arquivis', async ()=> {
    const expected = DEFAULT_ITEM_CADASTRAR

    ok(null, expected)
 })

    //it('deve cadastrar um heroi, usando arquivos', async() => {
        //const expected = DEFAULT_ITEM_CADASTRAR
        //
        //ok(null, expected)
   // })
})