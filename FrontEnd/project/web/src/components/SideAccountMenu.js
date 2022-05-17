import React from "react";
import {useState} from "react";

function SideAccountMenu(props) {

    const [wid, setWid] = useState("0%");

    const openNav = () => {
        console.log(wid)
        setWid("20%")
    }

    const closeNav = () => {
        console.log(wid)
        setWid("0%")
    }

    return(
        <div>
            <button type="button" id="btnstyle2" onClick={openNav}>
                        <img src={require("../imgs/account.jpg")}/>
                        Account
            </button>
            <div className="sidenav" style={{width: wid}}>
                <a href="" className="closebtn" onClick={closeNav}>&times;</a>
                <h3>Account</h3>
            </div> 
        </div>    
    );
}


export default SideAccountMenu;