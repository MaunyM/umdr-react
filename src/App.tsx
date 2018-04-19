import * as React from 'react';
import './App.css';

import {HelpComponent} from './components/Help';
import {LargePageComponent} from './components/LargePage';
import {MediumPageComponent} from './components/MediumPage';
import {MessageSubmissionComponent} from './components/Message-submission';
import {MessageType} from './types';


interface IState {
    message: string
    type: MessageType
    showHelp: boolean
}

const smallLetters = [',', ':', '!', '\''];

class App extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props);
        this.state = {message: '', type: MessageType.Large, showHelp: false};
        this.onMessageChange = this.onMessageChange.bind(this);
        this.onTypeChange = this.onTypeChange.bind(this);
        this.clickHelp = this.clickHelp.bind(this);
    }

    public clickHelp() {
        this.setState({showHelp: !this.state.showHelp});
    }

    public onMessageChange(message: string) {
        this.setState({message});
    }

    public onTypeChange(type: MessageType) {
        this.setState({type});
    }

    public render() {
        return (
            <div className="App">
                <button className={'no-print'} onClick={this.clickHelp}>Aide</button>
                {this.state.showHelp && (<HelpComponent/>)}
                <MessageSubmissionComponent type={this.state.type} onMessageChange={this.onMessageChange} onTypeChange={this.onTypeChange}/>
                <div className={'panneau'}>
                    {this.state.type === MessageType.Large && this.toLarge(this.state.message).map((letter, index) => (
                        <LargePageComponent key={index} letter={letter} number={index + 1}/>))}
                    {this.state.type === MessageType.Medium && this.toMedium(this.state.message).map((letter, index) => (
                        <MediumPageComponent key={index} letter={letter} number={index + 1}/>))}
                </div>
            </div>
        );
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

export default App;
