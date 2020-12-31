import React, { useContext } from "react";
import "../css/Toggle.css";
import { ToggleContext } from "../ToggleContext";

function Toggler() {

    const { toggleScheme } = useContext(ToggleContext);

    return (
        <div className="switch">
            <input
                id="cmn-toggle"
                className="cmn-toggle cmn-toggle-round-flat"
                type="checkbox"
                onChange={toggleScheme}
            />
            <label for="cmn-toggle"></label>
        </div>
    )
}

export default Toggler;