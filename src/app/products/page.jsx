
const Products = async () => {
    const res = await fetch('http://localhost:3000/api/items');
    const data = await res.json()
    return (
        <div>
            <h2>{JSON.stringify(data)}</h2>
        </div>
    );
};

export default Products;