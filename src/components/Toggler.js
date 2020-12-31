import React, { useContext } from "react";
import { ToggleContext } from "../ToggleContext";
import "../css/Toggle.css";

function Toggler() {

    const { theme, toggleScheme } = useContext(ToggleContext);

    return (
        <div className="switch">
            <input
                id="cmn-toggle"
                className={`cmn-toggle cmn-toggle-round-flat ${theme}-theme`}
                type="checkbox"
                onChange={toggleScheme}
            />
            <label for="cmn-toggle"></label>
        </div>
    )
}

export default Toggler;