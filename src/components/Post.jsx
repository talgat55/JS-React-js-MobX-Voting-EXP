import React from 'react';
import Card from "./Card";
import Form from "./Form";
import Comment from "./Comment";

export default () => {

    return (
        <div className="container-md"   align="center" >
            <Card />
            <Form/>
            <Comment />
        </div>
    )
};