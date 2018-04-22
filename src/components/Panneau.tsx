import * as React from 'react';
import {MessageType} from '../types';

import {LargePageComponent} from './LargePage';
import {MediumPageComponent} from './MediumPage';
import {SmallMessageComponent} from './SmalllMessage';


const smallLetters = [',', ':', '!', '\''];

interface IProps {
    message: string;
    type: MessageType;
}

export class PanneauComponent extends React.Component<IProps> {
    public render() {
        return (
            <div className={"panneau"}>
                {this.props.type === MessageType.Large && this.toLarge(this.props.message).map((letter, index) => (
                    <LargePageComponent key={index}
                                        letter={letter}
                                        number={this.toLarge(this.props.message).length - index}/>))}
                {this.props.type === MessageType.Medium && this.toMedium(this.props.message).map((letter, index) => (
                    <MediumPageComponent key={index}
                                         letter={letter}
                                         number={this.toMedium(this.props.message).length - index}/>))}
                {this.props.type === MessageType.Small && (
                    <div>
                        <SmallMessageComponent
                            message={this.props.message}
                            number={1}/>
                    </div>)}
            </div>)
    }


    protected toLarge(message: string): string[] {
        return message
            .split('')
            .filter((letter: string) => letter !== ' ') // On supprime les espace
            .map((letter: string) => letter.toUpperCase()) // on met tout en majuscule
            .reduce((acc, value) => {
                if (!smallLetters.find(letter => letter === value)) {
                    return [...acc, value]
                } else {
                    const last = acc.pop();
                    return [...acc, last + value] // On concatene les petites lettres
                }
            }, [])
            .reverse();
    }

    protected toMedium(message: string): string[] {
        return message
            .split('')
            .map(letter => letter.toUpperCase()) // on met tout en majuscule
            .reduce((acc, value) => {
                if (!smallLetters.find(letter => letter === value)) {
                    return [...acc, value]
                } else {
                    const last = acc.pop();
                    return [...acc, last + value] // On concatene les petites lettres
                }
            }, [])
            .reduce((acc: string[][], value) => {
                const last = acc.pop();
                if (last) {
                    if (last.length === 4) {
                        if (value !== ' ') {
                            return [...acc, last, [value]];
                        }
                    } else {
                        return [...acc, [...last, value]]
                    }
                }
                return [...acc, last];
            }, [[]])
            .map((strings: string[]) => strings.join(''))
            .reverse();
    }
}
