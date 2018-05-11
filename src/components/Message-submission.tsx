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
        this.handleFontSizeChange = this.handleFontSizeChange.bind(this);
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
                <label>
                    Taille des lettres :
                    <input name="name" onChange={this.handleFontSizeChange} value={this.props.message.fontSize}/>
                </label>
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
                message: {
                    ...this.state.message,
                    content: event.target.value,
                    fontSize: this.getFontSize(event.target.value, this.state.message.type)
                }
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

    protected handleFontSizeChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState({
                message: {...this.state.message, fontSize: +event.target.value}
            },
            () => this.props.onMessageChange(this.props.index, this.state.message)
        );
    }

    protected handleTypeChange(event: ChangeEvent<HTMLSelectElement>) {
        this.setState({
                message: {
                    ...this.state.message,
                    fontSize: this.getFontSize(this.state.message.content, +event.target.value),
                    type: +event.target.value
                }
            },
            () => this.props.onMessageChange(this.props.index, this.state.message)
        );
    }

    protected getFontSize = (content: string, type: MessageType) => {
        if (type === MessageType.Large) {
            return 800;
        }
        if (type === MessageType.Medium) {
            return 350;
        }
        if (content.length > 130) {
            return 30
        }
        if (content.length > 58) {
            return 50
        }
        return 70
    };
}