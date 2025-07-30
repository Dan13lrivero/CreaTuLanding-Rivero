import { useState } from "react";
import { CheckoutForm } from "./CheckoutForm";

export function Cart() {
    const [data, setData] = useState("Sin Data recibida")

    const handleSendForm = (data) => {
        setData(data);
    }
    return (
        <div>
            <h2 className="text-white d-flex justify-content-center">Cart</h2>
            <p className="d-flex justify-content-center text-white">{data}</p>
            <CheckoutForm onSendForm={handleSendForm} />
        </div>
        
    )
}