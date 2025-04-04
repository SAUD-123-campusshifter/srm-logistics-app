export function Select({ onValueChange, children, defaultValue }) {
  return <select onChange={(e) => onValueChange(e.target.value)} defaultValue={defaultValue} className="w-full p-2 border rounded-xl">{children}</select>;
}
export function SelectContent({ children }) {
  return <>{children}</>;
}
export function SelectItem({ value, children }) {
  return <option value={value}>{children}</option>;
}
export function SelectTrigger({ children }) {
  return <div>{children}</div>;
}
export function SelectValue({ placeholder }) {
  return <option disabled>{placeholder}</option>;
}