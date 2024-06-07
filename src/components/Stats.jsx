export default function Stats({ items }) {
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPackedItems / numItems) * 100);

  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  }

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got Everything! Ready to go ✈️"
          : `🧳 You have ${numItems} items on your list, and already packed ${numPackedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}
