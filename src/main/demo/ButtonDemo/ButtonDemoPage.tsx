import RadButton from "../../../lib/components/Buttons/RadButton.tsx";

const ButtonDemoPage = () => {

    return(
        <>
            <RadButton
                label={<div>herp derp</div>}
                onClick={() => console.log('Cool, you clicked something.')}
                mouseOver={() => console.log('Yay, a mouse over!')}
            />
        </>

    );
}

export default ButtonDemoPage;