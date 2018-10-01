export enum MessageType {
    Small = 0,
    Medium,
    Large
}

export class Message {
    public content: string = '';
    public type: MessageType = MessageType.Large;
    public author?: string;
    public fontSize: number = 800;
    public description: string = 'Affichage d\'opinion';
}