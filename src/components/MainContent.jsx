import React from 'react';
import '../css/MainContent.css';
import as_object from '../img/as object.jpg'
import as_object_1 from '../img/as object 1.jpeg'
import as_object_2 from '../img/as object 2.jpg'
import functions from '../img/functions.jpg'
import functions_1 from '../img/functions_1.jpg'
import functions_2 from '../img/functions_2.jpg'
import layer_by_layer from '../img/layer_by_layer.jpg'
import layer_by_layer_1 from '../img/layer_by_layer_1.jpeg'
import layer_by_layer_2 from '../img/layer_by_layer_2.jpg'

import inside_heart from '../img/inside_heart.jpeg'
import inside_heart_1 from '../img/inside_heart_1.jpg'
import inside_heart_2 from '../img/inside_heart_2.jpeg'
import inside_heart_3 from '../img/inside_heart_3.jpg'

import blood_circles from '../img/blood_circles.jpg'
import blood_circles_1 from '../img/blood_circles_1.jpeg'
import blood_circles_2 from '../img/blood_circles_2.jpg'

import vessels from '../img/vessels.jpg'
import vessels_1 from '../img/vessels_1.jpeg'
import vessels_2 from '../img/vessels_2.jpg'

import deseases from '../img/deseases.jpg'
import deseases_1 from '../img/deseases_1.jpg'
import deseases_2 from '../img/deseases_2.jpg'
import deseases_3 from '../img/deseases_3.jpg'
import deseases_4 from '../img/deseases_4.jpg'
import deseases_5 from '../img/deseases_5.jpg'
import deseases_6 from '../img/deseases_6.jpg'
import deseases_7 from '../img/deseases_7.jpeg'
import deseases_8 from '../img/deseases_8.jpeg'
import deseases_9 from '../img/deseases_9.jpg'
import deseases_10 from '../img/deseases_10.jpg'
import deseases_11 from '../img/deseases_11.jpg'

import youtube from '../img/youtube.jpg'
import care from '../img/care.jpg'


const MainContent = (props) => {
    let images = new Map();
    images.set('as_object', as_object);
    images.set('as_object_1', as_object_1);
    images.set('as_object_2', as_object_2);

    images.set('functions', functions);
    images.set('functions_1', functions_1);
    images.set('functions_2', functions_2);

    images.set('layer_by_layer', layer_by_layer);
    images.set('layer_by_layer_1', layer_by_layer_1);
    images.set('layer_by_layer_2', layer_by_layer_2);

    images.set('inside_heart', inside_heart);
    images.set('inside_heart_1', inside_heart_1);
    images.set('inside_heart_2', inside_heart_2);
    images.set('inside_heart_3', inside_heart_3);

    images.set('blood_circles', blood_circles);
    images.set('blood_circles_1', blood_circles_1);
    images.set('blood_circles_2', blood_circles_2);

    images.set('vessels', vessels);
    images.set('vessels_1', vessels_1);
    images.set('vessels_2', vessels_2);

    images.set('deseases', deseases);
    images.set('deseases_1', deseases_1);
    images.set('deseases_2', deseases_2);
    images.set('deseases_3', deseases_3);
    images.set('deseases_4', deseases_4);
    images.set('deseases_5', deseases_5);
    images.set('deseases_6', deseases_6);
    images.set('deseases_7', deseases_7);
    images.set('deseases_8', deseases_8);
    images.set('deseases_9', deseases_9);
    images.set('deseases_10', deseases_10);
    images.set('deseases_11', deseases_11);

    images.set('youtube', youtube);
    images.set('care', care);




    return (
        <div id="mainContent">
            <div className="mainContentClass">
                <div className="pictire">
                    <img src={images.get(props.currentState.imageContent)}/>
                </div>
                {/*<div id="description" className="description">{linesDiv.map(line => line)}*/}
                <div id="description" className="description">{props.currentState.text}
                </div>
            </div>

            <div className="additional">
                <div className="additionalPictures">
                    {props.currentState.additionalImages.map(elem =>
                        <img className="additionalPicture" src={images.get(elem)}/>
                    )}
                </div>
            </div>

        </div>
    );
};

export default MainContent;