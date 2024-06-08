import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-gradient-to-br from-slate-100 to-slate-950 via-slate-500 min-h-screen">
      {children}
    </div>
  );
};

export default layout;
