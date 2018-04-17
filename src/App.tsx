import * as React from 'react';
import './App.css';

import {HelpComponent} from './components/Help';
import {MediumPageComponent} from './components/MediumPage';
import {MessageSubmissionComponent} from './components/Message-submission';



interface IState {
    message: string[]
    showHelp : boolean
}

const smallLetters = [',', ':', '!', '\''];

class App extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props);
        this.state = {message: [], showHelp: false};
        this.onMessageChange = this.onMessageChange.bind(this);
        this.clickHelp = this.clickHelp.bind(this);
    }

    public clickHelp(){
        this.setState({showHelp: !this.state.showHelp});
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
                <button onClick={this.clickHelp}>Aide</button>
                {this.state.showHelp && (<HelpComponent/>)}
                <MessageSubmissionComponent onMessageChange={this.onMessageChange}/>
                <div className={'panneau'}>
                    {this.state.message.map((letter, index) => (<MediumPageComponent key={index} letter={letter} number={index+1}/>))}
                </div>
            </div>
        );
    }
}

export default App;
