export default function Textarea({
  id,
  value,
  onChange,
  placeholder,
  required,
}: {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="p-3 h-32 w-full rounded-md outline-none text-gray-200 bg-background-accent border text-base border-slate-500"
    />
  );
}