import * as React from 'react';
import './App.css';

import {MessageSubmissionComponent} from './components/Message-submission';
import {PageComponent} from './components/Page';

interface IState {
    message: string[]
}

class App extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props);
        this.state = {message: []};
        this.onMessageChange = this.onMessageChange.bind(this);
    }

    public onMessageChange(message: string) {
        this.setState({message: message.split('').map(letter => letter)});
    }

    public render() {
        return (
            <div className="App">
                <MessageSubmissionComponent onMessageChange={this.onMessageChange}/>
                <div className={'panneau'}>
                    {this.state.message.map(letter => (<PageComponent letter={letter}/>))}
                </div>
            </div>
        );
    }
}

export default App;
