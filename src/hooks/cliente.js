import { useState } from "react";

export const useCliente = () => {
    let cliente = {
        nome: 'Teste'
    }

    const setCliente = (nome) => {
        cliente.nome = nome
    }

    return { cliente, setCliente }
}
