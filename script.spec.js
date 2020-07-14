describe ('copy', () => {
    it ('should sum values', () => {
        const obj = {
            a : 2 ,
            b : 3 ,
        } ;
        expect (copy(obj)).not.equal(obj) ;
    }) ;
    if ('should create copy of object', () => {
        const obj = {
            a : 2,
            b : 3 ,
        } ;
    }) ;


    describe ('deepCopy', () => {
        it ('should copy object deep', () => {
            const obj = {
                a : {
                    a : 2 ,
                } ,
                b : 3 ,
            } ;

            const objectCopy = deepCopy (obj) ;

            expect (objectCopy.a).not.equal(obj.a) ;
        }) ;
    }) ;
}) ;