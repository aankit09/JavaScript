class Fruits{
    name = "orange"
    constructor()
    {
        console.warn("construtor",this.name);
    }
    getFruits(){
        return "apple"
       // console.warn("Function")
    }
}
let f1 = new Fruits;
console.warn(f1.getFruits());
