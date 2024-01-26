import {ReactNode} from "react";

export interface RadHeaderProps {
    children?: ReactNode;
}

export const RadHeader = ({children}: RadHeaderProps) => {
    return (
        <>
            <div>{children}</div>
        </>
    );
}