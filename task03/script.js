/*
Timothy Washington
script.js
INFO 2134 - Javascript II
Thoendel
Creation date: Apr 12, 2020
*/
window.addEventListener('load', function() {
    this.document.getElementById('actionCreate').addEventListener('click',function(e){//make promise
        let promise = new Promise(function(resolve){

            setTimeout(()=>resolve('done'),1000);//set timeout
        });
        promise.then(()=>{//upon resolve
                document.getElementById('actionCreate').className='hidden';
                document.getElementById('actionComplete').className='visible';
            }
        );
    });
    this.document.getElementById('actionComplete').addEventListener('click',function(e){//switch
        document.getElementById('actionCreate').className='visible';
        document.getElementById('actionComplete').className='hidden';
    });
});