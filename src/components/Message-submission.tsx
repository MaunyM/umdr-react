import * as React from 'react';
import {ChangeEvent} from 'react';
import {MessageType} from '../types';

interface IProps {
    type: MessageType
    index: number
    onMessageChange: (i: number, m: string) => void;
    onTypeChange: (i: number, t: MessageType) => void;
}

export class MessageSubmissionComponent extends React.Component<IProps, object> {
    constructor(props: IProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
    }

    public render() {
        return (
            <form className={'no-print'}>
                <label>
                    Message :
                    <textarea name="name" onChange={this.handleChange}/>
                </label>
                <select onChange={this.handleTypeChange} value={this.props.type}>
                    <option value={MessageType.Small}>Small</option>
                    <option value={MessageType.Medium}>Medium</option>
                    <option value={MessageType.Large}>Large</option>
                </select>
            </form>
        )
    }

    protected handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        this.props.onMessageChange(this.props.index, event.target.value);
    }

    protected handleTypeChange(event: ChangeEvent<HTMLSelectElement>) {
        this.props.onTypeChange(this.props.index, +event.target.value);
    }
}