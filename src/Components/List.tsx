import * as React from 'react';
import { ListAction } from '../Myflux/Actions';

export interface ListProps {
    List: string[];
}

export default class List extends React.Component<ListProps> {
    nameInput: HTMLInputElement;
    listAction = new ListAction();

    render() {
        return (
            <ul>
                {this.props.List.map((i, key) => <li key={key}>{i}</li>)}
                <li><input ref={i => this.nameInput = i!} /></li>
                <li>
                    <button
                        onClick={() => {
                            this.listAction.add(this.nameInput.value);
                            this.nameInput.value = "";
                            this.nameInput.focus();
                        }}
                    >Add
                    </button>
                </li>
            </ul>
        );
    }
}