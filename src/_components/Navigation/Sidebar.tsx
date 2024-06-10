import Image from "next/image";
import Link from "next/link";
import '@/_styles/Sidebar/sidebar.css'
export default function Sidebar() {
    return (
        <div className="sidebar_main">
            <Image className="sidebar_closing" src={"Components/Sidebar/Closing.svg"} height={10} width={25} alt={"X"}/>
            <div className="sidebar_user_sign">
                <Image src={"Components/Sidebar/User_placeholder_image.svg"} height={10} width={100} alt={"User photo"}/>
                <a>
                    Login
                </a>
                <a>
                    Sign-in
                </a>
            </div>
            <div className="sidebar_navigation">
                <Link href={""} style={{padding:"10px"}}>
                    Browse
                </Link>
                <Link href={""} style={{padding:"10px"}}>
                    Tags
                </Link>
                <Link href={""} style={{padding:"10px"}}>
                    Charts
                </Link>

            </div>
        </div>
    )
}