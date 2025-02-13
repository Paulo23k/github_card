function fnCarregarDados() {

fetch("https://api.github.com/users/Paulo23K")
  .then(resposta => {
    return resposta.json()
  })
  .then(dados => {
    fnCarregarDados(dados.avatar_url, dados.name, dados.bio, dados.email, dados.twitter_username,
      dados.html_url,
      dados.blog
    )
  })
}

function fnMostrardados(foto, nome, resumo, email, twitter, github,blog) {
  document.getElementById("avatar").src = foto
  document.getElementById("nome").innerHTML = nome
  document.getElementById("resumo").innerHTML = resumo + "<br><strong id='email'></strong>"
  document.getElementById("email").innerHTML = email
  document.getElementById("twitter").href = twitter
  document.getElementById("github").href = github
  document.getElementById("blog").href = blog
}

let botao = document.getElementById("botao-carregar-dados")
botao.addEventListener("click", function(){
  fnCarregarDados()
})