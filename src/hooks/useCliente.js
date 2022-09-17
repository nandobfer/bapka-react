import { useState } from "react";

export const useCliente = () => {
    const [cliente, setCliente] = useState(null)

    return { cliente, setCliente }
}
