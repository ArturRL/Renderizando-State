import React from 'react'
export default class pao extends React.Component{

state={
  nome: "Artur",
  idade: 18,
  comidafavorita: "pipoca",
  musica: ['bonde das maravilhas', 'pesadão', 'girl from rio']
}
render(){
  return(
    <>
    <div>
        <h1>{this.state.nome}</h1>
        <h2>{this.state.idade}</h2>
        <h3>{this.state.comidafavorita}</h3>
        <ul>
          <li>{this.state.musica[0]}</li>
          <li>{this.state.musica[1]}</li>
          <li>{this.state.musica[2]}</li>
        </ul>
      </div>
    </>
  )
}














}