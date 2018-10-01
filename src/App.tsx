import * as React from 'react';
import './App.css';

import {Button, Divider, Grid, Icon, Menu, Segment} from 'semantic-ui-react';

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
                <Menu className={'no-print'} >
                    <Menu.Item header={true} className={'pink'}>Messages à caractères associatifs</Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Button icon={true} onClick={this.clickHelp}>
                                <Icon name='help'/>
                            </Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
                {this.state.showHelp && (<HelpComponent/>)}
                <Segment className={'no-print'} attached={true}>
                    <Button icon={true} onClick={this.onNewMessage} primary={true}>
                        <Icon name='add'/>
                        Nouveau message
                    </Button>
                    <Divider/>
                    <Grid divided={'vertically'}>
                        {this.state.messages.map((message, index) => (
                            <MessageSubmissionComponent message={this.state.messages[index]}
                                                        index={index}
                                                        key={index}
                                                        onMessageChange={this.onMessageChange}
                            />
                        ))}
                    </Grid>
                </Segment>
                {this.state.messages.map((message, index) => (
                    <PanneauComponent message={message} key={index}/>
                ))}
            </div>
        );
    }
}

export default App;
