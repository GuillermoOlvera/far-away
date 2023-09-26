import { useState } from "react"
import { Form } from "./components/Form"
import { Logo } from "./components/Logo"
import { PackingList } from "./components/PackingList"
import { Stats } from "./components/Stats"

export const App = () => {

  const [items, setItems] = useState([]);

  const handleDelete = (id) => {
    setItems(items => items.filter(item => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems(items => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item))
  }

  const handleClearList = () => {
    const confirmed = window.confirm('Are you sure you want to delete all items?');
    if (confirmed) setItems([])
  }

  return (
    <div className="app">
      <Logo />
      <Form items={items} setItems={setItems} />
      <PackingList items={items} setItems={setItems} handleDelete={handleDelete} handleToggleItem={handleToggleItem} handleClearList={handleClearList} />
      <Stats items={items} />
    </div>
  )
}

