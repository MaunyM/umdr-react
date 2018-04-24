import * as React from 'react';

import './smallMessage.css'

interface IProps {
    message: string;
    number: number;
}

export const SmallMessageComponent = (props: IProps) => {
    return (
            <div className={'small'}>
                <div className={'titre'}>
                    <span className={'expression'}>Panneau d'expression libre</span>
                </div>
                <div className={'message'}>
                    <div className={"texte"}>{props.message}</div>
                    <div className={"auteur"}/>
                </div>
                <div className={'liens'}>
                    <div className={'social'}>
                        <img src="./instagram.png"/>
                        <img src="./facebook.png"/>
                        /unmurdanslereel
                    </div>
                    <div className={'umdr'}>
                        www.unmurdanslereel.fr
                    </div>
                    <div className={'qrcode'}>
                        <img src="qr-code.svg"/>
                    </div>
                </div>
            </div>
)
}