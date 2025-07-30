export function CheckoutForm({ onSendForm }) {
    const x = 1;
    const handleClick = () => {
        onSendForm(x)
    }
    return (
        <div className="d-flex justify-content-center">
            <button onClick={handleClick}>Buy</button>
        </div>
    )
}