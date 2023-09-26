import { useState } from "react";

export const Form = ({ items, setItems }) => {

    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(1);

    const handleAddItems = (item) => {
        setItems(items => [...items, item])
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!description) return;

        const newItem = { description, quantity, packed: false, id: Date.now() }

        handleAddItems(newItem);

        setDescription('');
        setQuantity(1);
    };

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your 😍 trip?</h3>
            <select value={quantity} onChange={event => setQuantity(Number(event.target.value))}>
                {
                    Array.from({ length: 20 }, (_, i) => i + 1).map(
                        num => (
                            <option value={num} key={num} >
                                {num}
                            </option>
                        )
                    )
                }
            </select>
            <input type="text" placeholder="Item..." value={description} onChange={event => setDescription(event.target.value)} />
            <button>Add</button>
        </form>
    );
};