/*
Timothy Washington
script.js
INFO 2134 - Javascript II
Thoendel
Creation date: Apr 12, 2020
*/
window.addEventListener('load', function() {
    this.document.getElementById('myForm').addEventListener('submit',function(e){
        let err='';//set up error hold
        const regex=/(?:\(?[2-9]\d{2})(?:( ?\) ?)|( ?- ?))?(?:\d{3})(?: ?- ?)?(?:\d{4})/g;//regex

        //check
        if(document.getElementById('firstName').value=='')err+='Missing first name\n';
        if(document.getElementById('lastName').value=='')err+='Missing last name\n';
        if(!regex.test(document.getElementById('telephoneNumber').value))
            err+=`Phone Number must start above 199 and be in one of the following formats:
    nnn-nnn-nnnn
    (nnn) nnn-nnnn
    nnnnnnnnnn`

        if(err.length>0){//error?
            e.preventDefault();//stop redirect
            alert(err);
        }
    });
});