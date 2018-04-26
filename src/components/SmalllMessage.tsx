import * as React from 'react';

import {Message} from '../types';
import './smallMessage.css'


interface IProps {
    message: Message;
}

const texteClass = (content: string) => {
    if(content.length > 130) {
        return 'small'
    }
    if(content.length > 58) {
        return 'medium'
    }
    return 'big'
};

export const SmallMessageComponent = (props: IProps) => {
    return (
        <div className={'small'}>
            <div className={`titre`}>
                <span className={'expression'}>Affichage d'opinion</span>
            </div>
            <div className={'message'}>
                <div className={`texte ${texteClass(props.message.content)}`}>{props.message.content}</div>
                <div className={'auteur'}>{props.message.author}</div>
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