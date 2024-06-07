import { useState } from "react";
import { initialItems } from "../data/data";

export default function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [initialItems, setInitialItems] = useState(initialItems);

  function handleSubmit(event) {
    event.preventDefault();
    if (!description.trim()) return;

    const newItem = {
      id: Date.now(),
      description: description.trim(),
      quantity,
      packed: false,
    };

    //setInitialItems([...initialItems, newItem]);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 10 }, (_, index) => index + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
