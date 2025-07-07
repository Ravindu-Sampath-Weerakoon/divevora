// import Image from "next/image";
// import styles from "./page.module.css";

import NavBar from "./components/NavBar/NavBar";
import TopBar from "./components/TopBar/TopBar";


export default function Home() {
  return (
    <div>
        <TopBar/>
        <NavBar/>
        <div style={{ height: "5000px" }}>
        </div>
    </div>
    
  );
}
