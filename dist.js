const MeuNomeCtx = React.createContext();

function Componente1() {
  const valorRepassado = 'o que esta aqui vai?';
  /*            return (
                  React.createElement(MeuNomeCtx.Provider, { value: valorRepassado },
                      React.createElement('div', { className: 'componente-1' },
                          React.createElement(Componente2)
                      )
                  ) 
              )*/

  return /*#__PURE__*/React.createElement(MeuNomeCtx.Provider, {
    value: valorRepassado
  }, /*#__PURE__*/React.createElement("div", {
    className: "componente-1"
  }, /*#__PURE__*/React.createElement(Componente2, null)));
}

function Componente2() {
  /*            let nome = 'sporgeon'
              return React.createElement('div', null,
                  React.createElement(Componente3, {dados: nome}))*/
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Componente3, null));
}

function Componente3() {
  /*            return (
                  React.createElement('div', { className: 'componente-3'}, 
                      React.createElement('p', null, props.dados),
                      React.createElement('div', null, 
                          React.createElement(Componente4)
                      )
                  )
              )*/
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Componente4, null)));
}

function Componente4() {
  /*            return (
                  React.createElement(MeuNomeCtx.Consumer, null,
                      (valorRepassado2)=> (
                          React.createElement('div', { className: 'componente-4' },
                              React.createElement('p', null, valorRepassado2),
                              React.createElement('h3', null, 'finalizando')
                          )
                      )
                  )
              )*/
  return /*#__PURE__*/React.createElement(MeuNomeCtx.Consumer, null, valorRepassado2 => /*#__PURE__*/React.createElement("div", {
    className: "componente-4"
  }, /*#__PURE__*/React.createElement("p", null, valorRepassado2), /*#__PURE__*/React.createElement("h3", null, "finalizando novamente")));
}

function MeuComponente() {
  /*            return React.createElement('div', { id: 'componentes'}, 'MeuComponente',
                  React.createElement(Componente1))*/
  return /*#__PURE__*/React.createElement("div", {
    id: "componentes"
  }, /*#__PURE__*/React.createElement(Componente1, null));
} //determinado a DOM


ReactDOM.render(
/*#__PURE__*/
//            React.createElement(MeuComponente),
React.createElement(MeuComponente, null), document.getElementById('app'));
