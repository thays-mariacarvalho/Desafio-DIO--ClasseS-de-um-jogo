let nome = " Thiago "
let idade = 29

class tipo{
    constructor(Heroi, Ataque){
       this.Heroi = Heroi
       this.Ataque = Ataque
     }   
    
    
    escrever(){
    console.log (`O ${this.Heroi} ${nome} atacou com ${this.Ataque}`)
} 
} 
let heroi = new tipo("guerreiro" , "espada")
let heroi2 = new tipo ("mago" , "magia")
let heroi3 = new tipo ("monge" , " artes marciais")
let heroi4 = new tipo ("ninja" , "shuriken")

heroi.escrever()
heroi2.escrever()
heroi3.escrever()
heroi4.escrever()
