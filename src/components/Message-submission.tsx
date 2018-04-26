import * as React from 'react';
import {ChangeEvent} from 'react';
import {Message, MessageType} from '../types';

interface IProps {
    message: Message;
    index: number;
    onMessageChange: (i: number, m: Message) => void;
}

interface IState {
    message: Message
}

export class MessageSubmissionComponent extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {message: {...this.props.message}};
        this.handleChange = this.handleChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
    }

    public render() {
        return (
            <form className={'no-print'}>
                <label>
                    Message :
                    <textarea name="name" onChange={this.handleChange}/>
                </label>

                {this.state.message.type === MessageType.Small && (<label>
                    Auteur :
                    <textarea name="author" onChange={this.handleAuthorChange}/>
                </label>)}
                <select onChange={this.handleTypeChange} value={this.props.message.type}>
                    <option value={MessageType.Small}>Small</option>
                    <option value={MessageType.Medium}>Medium</option>
                    <option value={MessageType.Large}>Large</option>
                </select>
            </form>
        )
    }

    protected handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        this.setState({
                message: {...this.state.message, content: event.target.value}
            },
            () => this.props.onMessageChange(this.props.index, this.state.message)
        );

    }

    protected handleAuthorChange(event: ChangeEvent<HTMLTextAreaElement>) {
        this.setState({
                message: {...this.state.message, author: event.target.value}
            },
            () => this.props.onMessageChange(this.props.index, this.state.message)
        );

    }

    protected handleTypeChange(event: ChangeEvent<HTMLSelectElement>) {
        this.setState({
                message: {...this.state.message, type: +event.target.value}
            },
            () => this.props.onMessageChange(this.props.index, this.state.message)
        );
    }
}