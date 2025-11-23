const container = document.querySelector(".hospitais-container")

//array de objetos contendo o cadastro dos hospitais do município
const hospitais = [
    {
        nome: "Hospital Regional de Governador Valadares",
        totalLeitos: 150, 
        leitosOcupados: 145, 
        especialidades: ["Clínico Geral", "Pediatria", "Oncologia", "Ginecologia"]
    },

    {
        nome: "Hospital Unimed de Governador Valadares", 
        totalLeitos: 80, 
        leitosOcupados: 50, 
        especialidades: ["Neurologia", "Pediatria", "Ortopedia"]
    },

    {
        nome: "Hospital São Lucas",
        totalLeitos: 90, 
        leitosOcupados: 70, 
        especialidades: ["Cardiologia", "Clinico Geral", "Oncologia"]
    }
]
//calcula a porcentagem de leitos ocupados
function calcularLotacao(hospital){
    return (hospital.leitosOcupados / hospital.totalLeitos) * 100
}

//retorna a cor da borda de acordo com o percentual de leitos ocupados
function corAlerta(percentual){
    if(percentual < 70) return "verde";
    if(percentual < 90) return "amarelo";
    return "vermelho"
}

//percorrre o array hospitais e aplica a função de callback
hospitais.forEach(hospital =>{
    const lotacao = calcularLotacao(hospital);
    const cor = corAlerta(lotacao);

    const novaDiv = document.createElement("div")
    novaDiv.className = `hospital ${cor}`
    novaDiv.innerHTML = `
    <h2><strong>${hospital.nome}</strong></h2>
    <p><strong>Lotaçaõ:</strong> ${lotacao.toFixed(1)}%</p>
    <p><strong>Especialidades:</strong> ${hospital.especialidades.join(", ")}</p>
    `
    //cria as div com as características definidas no forEach()
    container.appendChild(novaDiv)
})