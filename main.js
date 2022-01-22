const MeuNomeCtx = React.createContext();

        function Componente1() {
            const valorRepassado = 'o que esta aqui vai?'
            return (
                React.createElement(MeuNomeCtx.Provider, { value: valorRepassado },
                    React.createElement('div', { className: 'componente-1' },
                        React.createElement(Componente2)
                    )
                ) 
            ) 
        }

        function Componente2() {
            let nome = 'sporgeon'
            return React.createElement('div', null,
                React.createElement(Componente3, {dados: nome}))
            return (
                <div>
                    <Componente3 dados="nome"/>
                </div>
            )
        }

        function Componente3(props) {
/*            return (
                React.createElement('div', { className: 'componente-3'}, 
                    React.createElement('p', null, props.dados),
                    React.createElement('div', null, 
                        React.createElement(Componente4)
                    )
                )
            )*/
            return (
                <div className="componente-3">
                    <p>{ props.dados }</p>
                    <div>
                        <Componente4/>
                    </div>
                </div>
            )
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
            return (
                <MeuNomeCtx.Consumer>
                    {
                        (valorRepassado2) => (
                            <div className="componente-4">
                                <p>{valorRepassado2}</p>
                                <h3>finalizando novamente</h3>
                            </div>
                        )
                    }
                </MeuNomeCtx.Consumer>
            )
        }

        function MeuComponente() {
/*            return React.createElement('div', { id: 'componentes'}, 'MeuComponente',
                React.createElement(Componente1))*/
            return (
                <div id="componentes">
                    <Componente1/>
                </div>
            )
        }

//determinado a DOM
        ReactDOM.render(
//            React.createElement(MeuComponente),
            <MeuComponente/>,
            document.getElementById('app')
        )