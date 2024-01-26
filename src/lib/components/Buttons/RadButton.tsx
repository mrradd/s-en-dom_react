import {ClazzNames} from "../../ClazzNames.ts";
import {ReactNode} from "react";
import './RadButton.css'

export interface RadButtonProps {
    //Label for the button.
    label?: string | ReactNode;

    //Mouse over event handler.
    mouseOver?: () => void;

    //On click event handler.
    onClick?: () => void;
}

/**
 * A simple button which takes RadButtonProps.
 **/
const RadButton = ({label, mouseOver, onClick}: RadButtonProps) => {
    return(
        <button className={ClazzNames.radButton} onClick={onClick} onMouseOver={mouseOver}>
            {label}
        </button>
    );
}

export default RadButton;