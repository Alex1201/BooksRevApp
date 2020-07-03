export interface Comment {
    id: number;
    book: string;
    username: string;
    textComment: string;
    recipientId: number;
    whenAdded: string;
}
