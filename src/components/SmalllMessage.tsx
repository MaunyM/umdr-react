import * as React from 'react';

import {Message} from '../types';
import './smallMessage.css'

interface IProps {
    message: Message;
}

export class SmallMessageComponent extends React.Component<IProps> {
    public render() {
        return (
            <div className={'small'}>
                <div className={`titre`}>
                    <span className={'expression'}>Affichage d'opinion</span>
                </div>
                <div className={'message'}>
                    <div
                        className={`texte`}>{this.props.message.content}</div>
                    <div className={'auteur'}>{this.props.message.author}</div>
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
    };

}

