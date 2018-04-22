import * as React from 'react';
import './App.css';

import {HelpComponent} from './components/Help';
import {MessageSubmissionComponent} from './components/Message-submission';
import {PanneauComponent} from './components/Panneau';

import {MessageType} from './types';


interface IState {
    messages: string[]
    types: MessageType[]
    showHelp: boolean
}

class App extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props);
        this.state = {messages: [''], types: [MessageType.Large], showHelp: false};
        this.onMessageChange = this.onMessageChange.bind(this);
        this.onTypeChange = this.onTypeChange.bind(this);
        this.clickHelp = this.clickHelp.bind(this);
        this.onNewMessage = this.onNewMessage.bind(this);
    }

    public clickHelp() {
        this.setState({showHelp: !this.state.showHelp});
    }

    public onMessageChange(index: number, message: string) {
        this.setState({messages: [...this.state.messages.slice(0, index), message, ...this.state.messages.slice(index + 1)]});
    }

    public onTypeChange(index: number, type: MessageType) {
        this.setState({types: [...this.state.types.slice(0, index), type, ...this.state.types.slice(index + 1)]});
    }

    public onNewMessage() {
        this.setState({messages: [...this.state.messages, ''], types: [...this.state.types, MessageType.Large]})
    }

    public render() {
        return (
            <div className="App">
                <button className={'no-print'} onClick={this.clickHelp}>Aide</button>
                {this.state.showHelp && (<HelpComponent/>)}
                {this.state.messages.map((message, index) => (
                    <MessageSubmissionComponent type={this.state.types[index]}
                                                index={index}
                                                onMessageChange={this.onMessageChange}
                                                onTypeChange={this.onTypeChange}/>
                ))}
                <button onClick={this.onNewMessage} className={'no-print'} >Nouveau message</button>
                {this.state.messages.map((message, index) => (
                    <PanneauComponent message={message} type={this.state.types[index]}/>
                ))}
            </div>
        );
    }
}

export default App;
