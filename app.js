function fnCarregarDados() {

fetch("https://api.github.com/users/Paulo23K")
  .then(resposta => {
    return resposta.json()
  })
  .then(data => {
    console.dir(data)
  })
}

