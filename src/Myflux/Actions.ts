import { ListDispatch } from "./Dispatch";

export class ListAction {
    add(name: string) {
        ListDispatch.dispatch({ type: "Add", name });
    }
}