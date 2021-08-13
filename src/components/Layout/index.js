import React from "react";

function MainLayout({children, className=''}) {
  return (
    <main className={`bg-base min-h-screen ${className}`}>
      {children}
    </main>
  )
}

export default MainLayout;
