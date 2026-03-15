interface ButtonItem {
  id: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export const ButtonGroup = ({ items }: { items: ButtonItem[] }) => (
  <div className="unified-controls">
    {items.map(({ id, label, isActive, onClick }) => (
      <button
        key={id}
        onClick={onClick}
        className={`story-button ${isActive ? "active" : ""}`}
      >
        {label}
      </button>
    ))}
  </div>
);
