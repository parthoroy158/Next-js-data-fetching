"use client"

const ProductsAdd = async () => {

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.productsName.value;
        console.log(name)
        const payload = { name };
        const res = await fetch('http://localhost:3000/api/items', {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json",
            }
        })

        const data = await res.json()
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='productsName' placeholder='Products Name' className="border" />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default ProductsAdd;