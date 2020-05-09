import React, {useContext} from "react";
import {StoreContext} from "../app";

const Count = () => {
    const store = useContext(StoreContext);

    return (
        <div className="row reactions-count">
            <div className="col-sm" align="left">
                <i className="fa fa-thumbs-up"/>
                {store.likeCount}
            </div>
            <div className="col-sm" align="right">

                3 comments

            </div>
        </div>
    )
};

export default Count;