import { EventEmitter } from "events";
import { ListDispatch } from "./Dispatch";
import { ActionType, ListActionType } from "./ActionTypes";

export abstract class BaseStore<T extends ActionType> extends EventEmitter {
    constructor() {
        super();

        this.registerDispatch();
    }

    abstract registerDispatch(): void;

    abstract callBack(data: T): void;
}

export default class ListStore extends BaseStore<ListActionType> {
    ListArr: string[] = [];

    callBack(data: ListActionType): void {
        switch (data.type) {
            case 'Add':
                this.ListArr.push(data.name!);
                break;
            default:
                break;
        }

        this.emit('change', this.ListArr);
    }

    registerDispatch(): void {
        ListDispatch.registerStore(this);
    }

    add(name: string) {
        this.callBack({ type: "Add", name });
    }
}