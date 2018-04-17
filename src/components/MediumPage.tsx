import * as React from 'react';

interface IProps {
    letter: string;
    number: number;
}

export const MediumPageComponent = (props: IProps) => {
    return (
        <div className={"page landscape"}>
            <div className={"letter"}>{props.letter}</div>
            <div className={"number"}>{props.number}</div>
        </div>)
}