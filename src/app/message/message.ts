export class Message {
    messageId: number;
    senderName: string;
    receiverId: string;
    circleName: string;
    postedDate: Date;
    streamType: string;
    message: string;
    tag: string;
}

export const MESSAGES = [
    { messageId: 501, senderName: "Nishani", receiverId: "Ami", circleName: null, 
    postedDate: new Date(), streamType: "text", message: "Hi, how are you?", tag: null },
    { messageId: 502, senderName: "Ami", receiverId: "Nishani", circleName: null, 
    postedDate: new Date(), streamType: "text", message: "I am good. you?", tag: null },
    { messageId: 503, senderName: "Nishani",  circleName: "circle 1",  receiverId: null,
    postedDate: new Date(), streamType: "text", message: "Hi, good morning all?", tag: null }

]