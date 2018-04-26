export enum MessageType {
    Small = 1,
    Medium,
    Large
}

export class Message {
    public content: string = '';
    public type: MessageType = MessageType.Large;
    public author?: string;
}