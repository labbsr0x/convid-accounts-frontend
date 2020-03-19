import React from 'react'

function Instructions() {

    return <>
        <div className="p-2">
            <h3 className="login-heading">Vamos configurar as máquinas do escritório e da sua casa?</h3>
            <div className="mb-2">Você baixará dois programas: um para rodar na máquina que vai ficar no escritório e o outro na máquina que você vai usar na sua casa para acessá-la.</div>
            <a href={accountData.kitDownloadURL} className="btn btn-primary" title="Kit Download">Baixar programa da máquina do escritório</a>
            <a href={accountData.kitDownloadURL} className="btn btn-primary" title="Kit Download">Baixar programa para máquina da minha casa</a>
            <div className="mt-4"><a href="/como-utilizar-o-kit">Como utilizar esses programas?</a></div>
        </div>
    </>
}

export default Instructions