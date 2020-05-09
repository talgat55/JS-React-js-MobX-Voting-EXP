import React from 'react';
import Count from "./Count";
import Buttons from "./Buttons";
import {useObserver} from 'mobx-react';

const Card = () => {

    return (
        useObserver(() => (
            <div className="card">
                <button className="btn btn-light" onClick={() => {  console.log('www') }}>
                    <i className="fa fa-chevron-right" />
                </button>
                <Count />
                <div className="card-body" >
                    <Buttons />
                </div>
            </div>
        ))
    );
};

export default  Card;


