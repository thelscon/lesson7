'use strict' ;

//const sum = (a, b) => a + b ;

/*let funcObject = () => {
    let objectLenght = {
        name : 'Name' ,
        family : 'Family' ,
        age : 30
    }
    
    let col = 0 ;
    for (let key in objectLenght) {
        ++col ;    
    }
    
    return col ;    
}

let resultCol = funcObject () ;

alert (resultCol) ; */

const copy = (object) => {
    const newObj = {} ;
    for (const key in object) {
        const element = object [key] ;
        newObj [key] = element ;
    }
    return newObj ;
} ;

const cave = {
    a : {
        a : 1 ,
        b : false ,
    },
    b : {
        a : false ,
        b : false ,
    }
} ;

const deepCopy = (object) => {
    const newObj = {} ;
    for (const key in object) {
        const element = object [key] ;
            newObj [key] = 
            element !== null && typeof (element) === 'object'
            ? deepCopy (element) 
            : element ;
    }
    return newObj ;
} ;

const newCave = copy (cave) ;

cave.a.a = 'abc' ;
console.log (newCave.a.a === cave.a.a) ;
