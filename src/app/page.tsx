import Image from "next/image";
import Navbar from "@/_components/Navigation/Navbar";
import Sidebar from "@/_components/Navigation/Sidebar";
import React from "react";

export default function Home() {
    const [showSidebar, setShowSidebar] = React.useState(false);
  return (
    <main>
      <Navbar />

      <Sidebar/>
    </main>
  );
}
