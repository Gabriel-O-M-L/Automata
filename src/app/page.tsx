
import Image from "next/image";
import Navbar from "@/_components/Navigation/Navbar";
import Body from "@/_components/Body";
import Scroller from "@/_components/Navigation/Scroller";

export default function Home() {
     return (
        <main>
          <Navbar/>
          <Scroller/>
          <Body/>
        </main>
    );
}
