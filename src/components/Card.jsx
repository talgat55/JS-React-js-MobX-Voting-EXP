import React from 'react';
import Count from "./Count";
import Buttons from "./Buttons";
import {useObserver} from 'mobx-react';
import imageStore from '../store/ImageStore';
const Card = () => {

    return (
        useObserver(() => (
            <div className="card">
                <img src={imageStore.imageUrl} className="card-img-top" alt="Image" />
                <button className="btn btn-light" onClick={() => {  imageStore.fetchImage() }}>
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


