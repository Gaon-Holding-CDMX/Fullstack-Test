import React from "react";

export default function LinkAsButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group/link cursor-pointer px-5 py-3 bg-cyan-300 rounded-lg relative max-h-14">
      <div>{children}</div>
      <a
        className="group-hover/link:ml-1 group-hover/link:-mt-1 absolute w-full h-full z-10 bg-primary top-0 left-0 rounded-lg"
        href={href}
      >
        <div className="flex items-center justify-center h-full font-bold">
          {children}
        </div>
      </a>
    </div>
  );
}
