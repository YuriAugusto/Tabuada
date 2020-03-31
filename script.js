function calcular(){
    var num = document.getElementById("tnum")
    var tab = document.getElementById("seltab")

    if(num.value.length == 0) {        
        window.alert("Por favor, digite um número!")
    }else{
        var n = Number(num.value)
        var c = 1// variavel contador
        tab.innerHTML = " "/*antes de mostrar o valor da tabuada ele recebe vazio
        para não acumular informações se for executado varias vezes*/
        while(c <= 10){
           var item = document.createElement("option")//cria uma option no "select" de forma dinâmica
           item.text = `${n} x ${c} = ${n*c}`
           tab.appendChild(item)//adicionar um elemente filho chamado "item"
           c++ //incrementa 1 toda vez que é executado
        }
    }


}