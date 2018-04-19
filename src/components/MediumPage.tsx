import * as React from 'react';

interface IProps {
    letter: string;
    number: number;
}

export const MediumPageComponent = (props: IProps) => {
    return (
        <div className={"page landscape"}>
            <div className={"spacer"}/>
            <div className={"letter"}>{props.letter}</div>
            <div className={"spacer"}/>
            <div className={"number"}>{props.number}</div>
        </div>)
}