import React from "react";

export default function LinkAsButton({
  href,
  children,
}: {
  href: string,
  children: React.ReactNode;
}) {
  return <a href={href} className="px-5 py-3 font-bold bg-primary rounded-lg hover:bg-opacity-90">
    {children}
  </a>
}
