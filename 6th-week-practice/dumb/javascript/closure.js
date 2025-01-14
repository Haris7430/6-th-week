

function outerFn(){
   
    let out=30;
    function innerFn(){
        console.log(out);

        
    }
    innerFn();
}
outerFn();