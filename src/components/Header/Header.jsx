// Header component

import { useState } from "react";

//styles
import { Wrapper, Content } from "./Header.styles";

// images
import logo from "../../images/logo.svg";

//components
import Modal from "../Modal/Modal";

const Header = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)    

    return (
        <Wrapper>
            <header>
                <Content>
                    <nav className="nav-bar">
                        <div className="logo-nav">
                            <img className="logo" src={logo} alt="logo" />
                            <h1>Pintrigue</h1>
                        </div>
                        <button className="log-in-btn" onClick={handleOpen}>Log In</button>
                    </nav>
                </Content>
                <Modal open={open} setOpen={setOpen}/>
            </header>
        </Wrapper>
    )
}

export default Header
