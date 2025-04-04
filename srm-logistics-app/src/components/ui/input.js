export function Input({ placeholder, name, value, onChange }) {
  return <input placeholder={placeholder} name={name} value={value} onChange={onChange} className="w-full p-2 border rounded-xl" />;
}