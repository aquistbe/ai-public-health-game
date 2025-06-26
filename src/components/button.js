
export function Button({ onClick, children, ...props }) {
  return (
    <button onClick={onClick} {...props} className="rounded bg-blue-600 text-white px-4 py-2 hover:bg-blue-700">
      {children}
    </button>
  );
}
