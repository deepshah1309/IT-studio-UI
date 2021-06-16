import "./Navigation.css";
import Logo from "../HeaderLogo";
import Menu from "../HeaderNavigationMenu";
import MenuIcon from "../../../Assets/menu.png";
import { useState } from "react";

const Navigation=()=>{
    const [OpenMenu,setOpenMenu]=useState(false);
    const openMenu=()=>{
        setOpenMenu(!OpenMenu);
        makeIt(OpenMenu);
       
    }
    let makeIt=(check)=>{
        if(check){
            const elements=document.getElementById("menusnav");
            elements.classList.add("showDrawer");
            console.log("add it")
        }
        else{
                const elements=document.getElementById("menusnav");
            elements.classList.remove("showDrawer");
            console.log("remove it");
            
        }

    }
    
    return (
        <div className="Navigation">
                <div className="part1"><Logo/></div>
                <div className="nav-hamburger" ><img src={MenuIcon} alt="hmb"  onClick={openMenu}></img></div>
               
                <div  className="part2" id="menusnav">
                    
                    <Menu open={OpenMenu} setOpen={setOpenMenu}/>
                </div>
               
        </div>
    )
}
export default Navigation;