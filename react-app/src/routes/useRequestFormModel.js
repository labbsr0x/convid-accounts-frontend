import { useState, useEffect } from 'react'

export default () => {

    const [messageType, setMessageType] = useState("")
    const [message, setMessage] = useState("")

    const [email, setEmail] = useState("")
    const [accountId, setAccountId] = useState("")
    const [accountData, setAccountData] = useState("")

    const accountAPIURL = `${process.env.REACT_APP_BACKEND_API_URL}/account`

    useEffect(_ => {
        if (window.localStorage.getItem("account")) {
            const storedAccount = JSON.parse(window.localStorage.getItem("account"))
            setAccountData(storedAccount)
            setEmail(storedAccount.email)
            setAccountId(storedAccount.accountId)
        }
    }, [])

    const createAccount = () => {
        if (!accountId) {
            return
        }

        const requestHeaders = new Headers();
        requestHeaders.append("Content-Type", "application/json");
        const requestOptions = {
            method: 'POST',
            headers: requestHeaders,
            body: JSON.stringify({
                "email": email,
                "accountId": accountId
            }),
        };
        setMessage("")
        fetch(accountAPIURL, requestOptions)
            .then(resp => {
                if (resp.status !== 201) {
                    setMessageType("danger")
                    setMessage("Houve um erro no servidor ao realizar a criação da sua conta. Aguarde alguns instantes e tente novamente, por favor.")

                } else if (resp.status === 201) {
                    return resp.json()
                }
            })
            .then(jsonObj => {
                if (jsonObj) {
                    setMessageType("success")
                    setMessage("Sua conta foi criada com sucesso!.")
                    window.localStorage.setItem("account", JSON.stringify(jsonObj[0]))
                    setAccountData(jsonObj[0])
                }
            }).catch(e => {
                console.error("Error creating account: ", e);
                setMessageType("danger")
                setMessage("Houve um erro de conexão ao realizar a criação da sua conta. Aguarde alguns instantes e tente novamente, por favor.")
            })

    }

    return {
        messageType,
        message,
        accountData,
        accountId, setAccountId,
        email, setEmail,
        createAccount
    }
}