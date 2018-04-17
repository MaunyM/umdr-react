import * as React from 'react';
import {ChangeEvent} from 'react';

interface IProps {
    onMessageChange: (m: string) => void;
}

export class MessageSubmissionComponent extends React.Component<IProps, object> {
    constructor(props: IProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    public render() {
        return (
            <form className={'no-print'}>
                <label>
                    Message :
                    <textarea name="name" onChange={this.handleChange}/>
                </label>
            </form>
        )
    }

    protected handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        this.props.onMessageChange(event.target.value);
    }
}