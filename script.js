function busca_personagem_serie(){
        nome_buscado=document.getElementById("nome_personagem").value.toLowerCase();
        fetch(`https://rickandmortyapi.com/api/character/?name=${nome_buscado}`)
        .then(response=>{
            if(!response.ok){
                throw new Error("Personagem não encontrado");
            }
            return response.json();
        })
        .then(data=>{
            const informacoes_personagem=data.results[0];
            document.getElementById("foto_personagem").src = informacoes_personagem.image;
            document.getElementById("foto_personagem").style.display = "block";

            document.getElementById("nome_personagem_exibido").textContent =
            informacoes_personagem.name;
            
            document.getElementById("status_personagem").textContent =
                `Status: ${informacoes_personagem.status}`;
            })
        .catch(error=>console.error(error));
}
