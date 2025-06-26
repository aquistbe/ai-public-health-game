
export function Input({ value, onChange, placeholder, type = 'text', min, max }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      min={min}
      max={max}
      className="w-full p-2 border rounded"
    />
  );
}
