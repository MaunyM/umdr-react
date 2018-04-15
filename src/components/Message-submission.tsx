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
            <div>
                <p className={'no-print'}>
                    Sous Chrome :
                    <ol>
                        <li> On tape le message</li>
                        <li> Dans le menu, on choisit "Imprimer..."</li>
                        <li> Puis "Modifier"</li>
                        <img src="modifier.png" style={{width : '213px'}}/>
                        <li> On choisit "Enregistrer au format PDF"</li>
                        <img src="enregistrer.png" style={{width : '415px'}}/>
                    </ol>
                </p>
                <form className={'no-print'}>
                    <label>
                        Message :
                        <textarea name="name" onChange={this.handleChange}/>
                    </label>
                </form>
            </div>)
    }

    protected handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        this.props.onMessageChange(event.target.value);
    }
}