
export function Textarea({ value, onChange, placeholder, rows }) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      className="w-full p-2 border rounded"
    />
  );
}
