import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gradient-to-br from-orange-600 to-rose-800 via-emerald-700 w-full">
      {children}
    </div>
  );
};

export default layout;
