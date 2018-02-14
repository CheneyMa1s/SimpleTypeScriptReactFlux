import { ActionType, ListActionType } from "./ActionTypes";
import { BaseStore } from "./Stores";

class Dispatch<T extends ActionType> {
    MiddleWares: ((data: T) => void)[] = [];
    Stores: BaseStore<T>[] = [];

    use(middleWare: (data: T) => void) {
        this.MiddleWares.push(middleWare);
    }

    registerStore(store: BaseStore<T>) {
        this.Stores.push(store);
    }

    dispatch(action: T) {
        for (const middleWare of this.MiddleWares) {
            middleWare(action);
        }

        for (const store of this.Stores) {
            store.callBack(action);
        }
    }
}

export const ListDispatch = new Dispatch<ListActionType>();