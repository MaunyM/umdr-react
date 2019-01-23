import * as React from 'react';
import {ChangeEvent} from 'react';

import {Form, Grid, Input, TextArea} from 'semantic-ui-react';

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
            <Grid.Row columns={7}>
                <Grid.Column>
                    <Form.Field>
                        <select onChange={this.handleTypeChange} value={this.props.message.type}>
                            <option value={MessageType.Small}>Small</option>
                            <option value={MessageType.Medium}>Medium</option>
                            <option value={MessageType.Large}>Large</option>
                        </select>
                    </Form.Field>
                </Grid.Column>
                <Grid.Column>
                    <Form.Field>
                        <label>
                            Message :
                        </label>
                        <TextArea name="name" onChange={this.handleChange}/>
                    </Form.Field>
                </Grid.Column>
                <Grid.Column>
                    <Form.Field>
                        <label>
                            Taille des lettres :
                        </label>
                        <Input name="name" onChange={this.handleFontSizeChange} value={this.props.message.fontSize}/>
                    </Form.Field>
                </Grid.Column>
                {this.state.message.type === MessageType.Small && (
                    <Grid.Column>
                        <Form.Field>
                            <label>
                                Auteur :
                            </label>
                            <Input name="author" onChange={this.handleAuthorChange}/>
                        </Form.Field>
                    </Grid.Column>)}
                {this.state.message.type === MessageType.Small && (
                    <Grid.Column>
                        <Form.Field>
                            <label>
                                Taille de l'auteur :
                            </label>
                            <Input name="author" onChange={this.handleAuthorFontSizeChange}
                                   value={this.props.message.authorFontSize}/>
                        </Form.Field>
                    </Grid.Column>)}
                {this.state.message.type === MessageType.Small && (
                    <Grid.Column>
                        <Form.Field>
                            <label>
                                Description :
                            </label>
                            <Form.Input name="description" value={this.props.message.description}
                                        onChange={this.handleDescriptionChange}/>
                        </Form.Field>
                    </Grid.Column>)}
            </Grid.Row>
        )
    }

    protected handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({
                message: {
                    ...this.state.message,
                    content: event.target.value,
                    fontSize: this.getFontSize(event.target.value, this.state.message.type)
                }
            },
            () => this.props.onMessageChange(this.props.index, this.state.message)
        );
    };


    protected handleAuthorChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState({
                message: {...this.state.message, author: event.target.value}
            },
            () => this.props.onMessageChange(this.props.index, this.state.message)
        );
    }

    protected handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
                message: {...this.state.message, description: event.target.value}
            },
            () => this.props.onMessageChange(this.props.index, this.state.message)
        );
    };

    protected handleFontSizeChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState({
                message: {...this.state.message, fontSize: +event.target.value}
            },
            () => this.props.onMessageChange(this.props.index, this.state.message)
        );
    }

    protected handleAuthorFontSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
                message: {...this.state.message, authorFontSize: +event.target.value}
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