import {czz} from "../../czz.ts";
import {ReactNode} from "react";

export interface RadButtonProps {
    //Label for the button.
    label?: string | ReactNode

    //On click event handler.
    onClick?: () => void

    //Mouse over event handler.
    mouseOver?: () => void
}

/**
 * A simple button which takes RadButtonProps.
 **/
const RadButton = (props: RadButtonProps) => {
    return(
        <>
            <button className={czz.radButton} onClick={props.onClick} onMouseOver={props.mouseOver}>
                {props.label}
            </button>
        </>
    );
}

export default RadButton;