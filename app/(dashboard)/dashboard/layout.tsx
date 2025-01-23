import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>Dashbord Components</h1>
      <div>{children}</div>
    </>
  );
}

export default layout;
