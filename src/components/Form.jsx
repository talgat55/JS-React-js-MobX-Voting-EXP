import React, {Component} from 'react';
import {StoreContext} from "../app";

export default class Form extends Component {

    handleSubmit = (e, store) => {
        e.preventDefault();
        store.postComment(this.comment.value);
        this.comment.value = "";
    };

    render() {
        return (
            <StoreContext.Consumer>
                {
                    store => (
                        <form  onSubmit={ (e) => this.handleSubmit(e, store)}>
                            <div>
                                <input
                                    type="text"
                                    id="comment"
                                    className="form-control"
                                    placeholder="Write comment"
                                    ref={ node => this.comment = node }

                                />
                            </div>
                        </form>
                    )
                }
            </StoreContext.Consumer>
        )
    }
}



