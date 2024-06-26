"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Sidebar from '@/_components/Navigation/Sidebar'
import '@/_styles/Navbar/navbar.css'


export default function Navbar() {
    const [showSidebar, setShowSidebar] = useState(false);

    const showSidebarHandler = () => {
        setShowSidebar(!showSidebar)
    }

    return (
        <div className="navbar_main">

            <div className="navbar_logo">
                <Image src={"/Components/Navbar/Logo.svg"} width={100} height={100} alt="Logo"/>
                <Link href={""}/>
            </div>
            <div className="navbar_centering">
                <div className="navbar_search_box">
                    <select className="navbar_type_selector" aria-placeholder={"Type"}>
                        <option value="Type">Release date</option>
                        <option value="Type">Writer</option>
                        <option value="Type">Penciller</option>
                        <option value="Type">Letterer</option>
                        <option value="Type">Inker</option>
                        <option value="Type">Colorist</option>
                        <option value="Type">Editor</option>
                        <option value="Type">Publisher</option>
                        <option value="Type">Translator</option>
                    </select>
                    <div className="navbar_search_inputs">
                        <input className="navbar_search_text_input" type="text" placeholder="Search"/>
                        <button className="navbar_search_button" type="submit">
                            <Image className="navbar_search_icon" src={"/Components/Navbar/search.svg"} height={1} width={35} alt="Search"/>

                        </button>
                    </div>
                </div>
            </div>

            <label className="navbar_sandwitch_main">
                <Image className="navbar_sandwitch_image" src={"/Components/Navbar/Sandwich.svg"} width={30}
                       height={100} alt={"Sandwitch"} onClick={showSidebarHandler}/>
            </label>

            {showSidebar && <Sidebar/>}
        </div>

    );
}

