
// assim da certo  -->  document.getElementById("nome-usuario").innerHTML = "<p style='color:green;'>Pedro Gomes</p>"

function atualizouSelect() {
    let select = document.querySelector('#alunos');
    let optionValue = select.options[select.selectedIndex];

    let value = optionValue.value;
    let texto = optionValue.text;

    document.getElementById("nome-usuario").innerHTML =texto;           
    
    console.log(value, texto)

    //Obs. Meu CSS está em branco 


}

atualizouSelect()