export interface Iprops {
  type: "normal" | "submit" | "cancel";
  name: string;
  value: string;
  disabled?: boolean;
  onChange: (name: string, value: string) => void;
}

function Input({ type, name, value, disabled, onChange }: Iprops) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  const typeStyle = (type: Iprops["type"]) => {
    if (type === "normal") return "bg-black";
    if (type === "cancel") return "bg-red";
    if (type === "submit") return "bg-blue";
  };

  return (
    <input
      className={typeStyle(type)}
      name={name}
      value={value}
      disabled={disabled}
      onChange={handleChange}
    />
  );
}

export default Input;
