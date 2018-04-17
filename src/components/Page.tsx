import * as React from 'react';

interface IProps {
    letter: string;
    number: number;
}

export const PageComponent = (props: IProps) => {
    return (
        <div className={"page portrait"}>
            <div className={"letter"}>{props.letter}</div>
            <div className={"number"}>{props.number}</div>
        </div>)
}