type OnOffPropsType = {
    value: boolean
}

export function OnOff(props: OnOffPropsType) {
    return (
        <div>
            {props.value &&
                <div>
                    <span style={{background: "green"}}>On </span><span>Off </span><span
                    style={{color: "green"}}>light</span>
                </div>}
            {!props.value &&
                <div>
                    <span>On </span><span style={{background: "red"}}>Off </span><span style={{color: "red"}}>light</span>
                </div>}
        </div>
    )
}