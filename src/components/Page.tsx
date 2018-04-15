import * as React from 'react';

interface IProps {
    letter: string;
}

export const PageComponent = (props: IProps) => {
    return (
        <div className={"break letter"}>
            {props.letter}
        </div>)
}