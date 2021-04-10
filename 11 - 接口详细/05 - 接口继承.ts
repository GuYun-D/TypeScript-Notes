interface Animal {
    eat(): void
}

interface Person extends Animal {
    work(): void
}

// class web implements Person {
//     public name: string
//     constructor(name: string) {
//         this.name = name
//     }

//     eat(){

//     }

//     work(){

//     }
// }

class Programer {
    public name: string
    constructor(name: string) {
        this.name = name
    }

    coding(code: string){
        console.log(this.name + code);
        
    }
}


class web extends Programer implements Person {
    public name: string
    constructor(name: string) {
        super(name)
    }

    eat() {

    }

    work() {

    }
}

let w = new web("万民庆")
w.coding("写代码")