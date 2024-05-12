document.addEventListener('DOMContentLoaded', function(){
    const botonBarra = document.querySelector('.Barra_Boton');
    const barraLateal = document.querySelector('.barra_lateral');

    botonBarra.addEventListener('click', function(){


        if(barraLateal.style.left === '0px' || barraLateal.style.left === '')
        {
            barraLateal.style.left = '-200px';

        }else{
            barraLateal.style.left = '0px';
        }
    });
});