import * as React from 'react';
import './App.css';

import {HelpComponent} from './components/Help';
import {MessageSubmissionComponent} from './components/Message-submission';
import {PanneauComponent} from './components/Panneau';

import {Message} from './types';


interface IState {
    messages: Message[]
    showHelp: boolean
}

class App extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props);
        this.state = {messages: [new Message()], showHelp: false};
        this.onMessageChange = this.onMessageChange.bind(this);
        this.clickHelp = this.clickHelp.bind(this);
        this.onNewMessage = this.onNewMessage.bind(this);
    }

    public clickHelp() {
        this.setState({showHelp: !this.state.showHelp});
    }

    public onMessageChange(index: number, message: Message) {
        this.setState({messages: [...this.state.messages.slice(0, index), message, ...this.state.messages.slice(index + 1)]});
    }

    public onNewMessage() {
        this.setState({messages: [...this.state.messages, new Message()]});
    }

    public render() {
        return (
            <div className="App">
                <button className={'no-print'} onClick={this.clickHelp}>Aide</button>
                {this.state.showHelp && (<HelpComponent/>)}
                {this.state.messages.map((message, index) => (
                    <MessageSubmissionComponent message={this.state.messages[index]}
                                                index={index}
                                                onMessageChange={this.onMessageChange}
                    />
                ))}
                <button onClick={this.onNewMessage} className={'no-print'}>Nouveau message</button>
                {this.state.messages.map((message, index) => (
                    <PanneauComponent message={message}/>
                ))}
            </div>
        );
    }
}

export default App;
