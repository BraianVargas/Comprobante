function Recargar(){
    a=document.getElementById("ContenidoElectronico").style.display;
    if(a == 'none'){
        document.getElementById("ContenidoElectronico").style.display = 'block';
    }else{
        document.getElementById("ContenidoElectronico").style.display = 'none';
    }
}
function RecargarBic(){
    a=document.getElementById("ContBic").style.display;
    if(a == 'none'){
        document.getElementById("ContBic").style.display = 'block';
    }else{
        document.getElementById("ContBic").style.display = 'none';
    }
}
function accesorio(){
    if(document.getElementById("SI").checked &&(document.getElementById("NO").checked==false)){
        document.getElementById("NO").checked=false
        document.getElementById("accesorio").style.display = 'block';
        if(document.getElementById("NO").checked){
            document.getElementById("SI").checked=false
            document.getElementById("accesorio").style.display = 'none';
        }
    }else{
        if(document.getElementById("NO").checked){
            document.getElementById("SI").checked=false
            document.getElementById("accesorio").style.display = 'none';
        }
        document.getElementById("accesorio").style.display = 'none';
    }
}