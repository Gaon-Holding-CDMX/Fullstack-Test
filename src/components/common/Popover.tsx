import { ArrowLeft } from "lucide-react";

export default function Popove({
  open,
  setOpen,
  children,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: React.ReactNode;
}) {
  if (!open) return null;

  return (
    <div className="fixed z-50 w-full h-full top-0 left-0 p-10">
      <div className="flex justify-center items-center h-full w-full">
        <span
          className="bg-[#00000085] top-0 left-0 h-full w-full cursor-pointer z-10 absolute"
          onClick={() => setOpen(false)}
        ></span>
        <div className="relative z-20 bg-background p-5 rounded-lg grid grid-rows-[auto_1fr] gap-5 min-w-96 max-sm:min-w-full">
          <div className="w-fit">
            <span onClick={() => setOpen(false)} className="cursor-pointer">
              <ArrowLeft />
            </span>
          </div>
          <div className="px-5 pb-5">{children}</div>
        </div>
      </div>
    </div>
  );
}
