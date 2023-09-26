export const Item = ({ item, handleDelete, handleToggleItem }) => {

    const { id, description, quantity, packed } = item;

    return (
        <li>
            <input type="checkbox" value={packed} onChange={() => { handleToggleItem(id) }} />
            <span style={packed ? { textDecoration: 'line-through' } : {}}>
                {quantity} - {description}
            </span>
            <button onClick={() => handleDelete(id)}>❌</button>
        </li>
    )
};