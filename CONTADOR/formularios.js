document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById("form")
    const resultado = document.getElementById("result")

    formulario.addEventListener('submit', (event) => {
        event.preventDefault();

        const nome = document.getElementById('nome')
        const email = document.getElementById('email')
        const mensagem = document.getElementById('mensagem')

        resultado.innerHTML = `
        <h2>Dados Enviados</h2>
        <p><strong>Nome: </strong> ${nome}</p>
        <p><strong>Email: </strong> ${email}</p>
        <p><strong>Mensagem: </strong> ${mensagem}</p>
        `
        formulario.reset()
    })
})
        

//const nome = document.getElementById('nome').value; // Adicionado .value para obter o valor do campo
//const email = document.getElementById('email').value; // Adicionado .value para obter o valor do campo
//const mensagem = document.getElementById('mensagem').value; // Adicionado .value para obter o valor do campo
