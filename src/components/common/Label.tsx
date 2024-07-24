export default function Label(props: React.HTMLProps<HTMLLabelElement>) {
  return (
    <label {...props} className="text-slate-300 text-sm">
      {props.children}
    </label>
  );
}
