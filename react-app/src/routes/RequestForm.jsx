import React, { useEffect } from 'react'
import useRequestFormModel from './useRequestFormModel'

function RequestForm() {

    const {
        message, messageType,
        accountData,
        accountId, setAccountId,
        email, setEmail,
        createAccount
    } = useRequestFormModel()

    useEffect(() => {
        window.jQuery(function () {
            window.jQuery('[data-toggle="tooltip"]').tooltip()
        })
    }, [])

    let accountIdFormatter = txt => txt

    if (accountId.length === "12533487000157".length) {
        accountIdFormatter = txt => txt.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1\.$2\.$3/$4-$5")
    } else if (accountId.length === "05321403970".length) {
        accountIdFormatter = txt => txt.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1\.$2\.$3-$4")
    }


    return <>
        {accountData &&
            <>
                <h3 className="mb-4">Sua conta foi criada com sucesso!</h3>
                <div>Antes de iniciarmos as configurações das máquinas, anote o identificador da sua conta pois <strong>você precisará dessa informação</strong> durante essa etapa:</div>
                <h2 className="code-info mt-3 mb-3 p-2">{accountIdFormatter(accountId)}</h2>
                <div className="mt-4 mb-2" style={{ display: "flex", justifyContent: "center" }}>
                    <button className="btn btn-primary">Agora, vamos configurar as máquinas?</button>
                </div>
            </>
        }
        {!accountData &&
            <>
                <h3 className="mb-4">Crie sua conta e comece a trabalhar remoto agora mesmo</h3>
                {message &&
                    <div className={"m-2 p-4 alert-" + messageType}>
                        {message}
                    </div>
                }
                <form onSubmit={e => { e.preventDefault(); createAccount() }}>
                    <div className="form-label-group">
                        <input defaultValue={email} onChange={e => setEmail(e.target.value)} type="email" id="inputChave" className="form-control" placeholder="Seu e-amil" required autoFocus />
                        <label htmlFor="inputChave">Seu e-mail</label>
                    </div>

                    <div className="form-label-group">
                        <input defaultValue={accountId} onChange={e => setAccountId(e.target.value)} type="text" id="inputSenha" className="form-control" placeholder="CNPJ ou CPF" required />
                        <label htmlFor="inputSenha">CNPJ ou CPF para identificação da conta</label>
                    </div>

                    <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">
                        Criar conta e configurar as máquinas
                </button>

                </form>
            </>
        }
    </>
}

export default RequestForm