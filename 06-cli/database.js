const {
    readFile, writeFile
} = require('fs')


const {
    promisify
} = require('util')

const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)

class Database {
    constructor(){
        this.NOME_ARQUIVO = 'herois.json'
    }

    async obterDadosArquivo() {
        const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8')
        return JSON.parse(arquivo.toString())
    }
    async escreverArquivo() {
        await writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(dados))
        return true

        const heroidcomId = {
            id,
            ...heroi
        }

        const dadosFinal = [
            ...dados,
            heroidcomId
        ]

        const resultado = await this.escreverArquivo(dadosFinal)
        return resultado;
    }

    async cadastar(heroi){
        const dados = await this.obterDadosArquivo()
        const id = heroi.id <= 2 ? heroi.id : Date.now();

    }
    async listar(id){
        const dados = await this.obterDadosArquivo()
        const dadosFiltrados = dados.filter(item => (id ? (item.id == id) :true))
        return dadosFiltrados
    
    }

    async remover(id) {
        if(!id) {
            return await this.escreverArquivo([])
        }

        const dados = await this.obterDadosArquivo()
        const indice = dados.findIndice( item => item.id === parseInt(id));
        if (!indice === -1) {
            throw Error('o usuario não existe');
        } 
        dados.splice(indice, 1);

        return await this.escreverArquivo(dados);


    }
    
}

module.exports = new Database();