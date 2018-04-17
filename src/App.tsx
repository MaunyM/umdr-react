import * as React from 'react';
import './App.css';

import {MessageSubmissionComponent} from './components/Message-submission';
import {PageComponent} from './components/Page';

interface IState {
    message: string[]
}

const smallLetters = [',', ':', '!', '\''];

class App extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props);
        this.state = {message: []};
        this.onMessageChange = this.onMessageChange.bind(this);
    }

    public onMessageChange(message: string) {
        const letters = message
            .split('')
            .filter(letter => letter !== ' ') // on supprimes les espaces
            .map(letter => letter.toUpperCase()) // on met tout en majuscule
            .reduce((acc, value) => {
                    if (!smallLetters.find(letter => letter === value)) {
                        return [...acc, value]
                    } else {
                        const last = acc.pop();
                        return [...acc, last + value] // On concatene les petites lettres
                    }
                }
                , [])
            .reverse();

        this.setState({message: letters});
    }

    public render() {
        return (
            <div className="App">
                <MessageSubmissionComponent onMessageChange={this.onMessageChange}/>
                <div className={'panneau'}>
                    {this.state.message.map((letter, index) => (<PageComponent key={index} letter={letter} number={index+1}/>))}
                </div>
            </div>
        );
    }
}

export default App;
