export default function Button(
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) {
  return (
    <button
      {...props}
      className="group/link cursor-pointer px-5 py-3 bg-cyan-300 rounded-lg relative max-h-14 w-full"
    >
      <div>{props.children}</div>
      <div className="group-hover/link:ml-1 group-hover/link:-mt-1 absolute w-full h-full z-10 bg-primary top-0 left-0 rounded-lg">
        <div className="flex items-center justify-center h-full font-bold">
          {props.children}
        </div>
      </div>
    </button>
  );
}
