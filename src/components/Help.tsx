import * as React from 'react';
import {Segment} from 'semantic-ui-react';

export class HelpComponent extends React.Component<{}, object> {
    public render() {
        return (
            <Segment className={'no-print'}>
                Sous Chrome :
                <ol>
                    <li> On tape le message</li>
                    <li> Dans le menu, on choisit "Imprimer..."</li>
                    <li> Puis "Modifier"</li>
                    <img src="modifier.png" style={{width: '213px'}}/>
                    <li> On choisit "Enregistrer au format PDF"</li>
                    <img src="enregistrer.png" style={{width: '415px'}}/>
                </ol>
            </Segment>
        )
    }
}