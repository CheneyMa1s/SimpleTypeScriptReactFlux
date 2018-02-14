
export interface ActionType {
    type: string;
}

export interface ListActionType extends ActionType {
    name?: string;
    num?: number;
}