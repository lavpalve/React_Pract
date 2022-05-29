import { useState } from 'react';
import '../index.css';

const image1 = require('../images/nature1.png');
const image2 = require('../images/nature2.png');
const image3 = require('../images/nature3.png');
const image4 = require('../images/nature4.png');

// [imagePath, setImage] = useState(image1); // var // fun // initalValue

// var imageArr = [image1, image2, image3, image1];
// var idx = 0;
// setInterval(()=>{
//     if(idx >= 4){
//         idx = 0;
//     }
//     setImage(imageArr[idx])
// },1000);

//var imagePath = require('../images/nature1.png');

function Carousel(){
    return(
        <div className='carouselDiv'>
            <img src={image1}/>
        </div>
    );
}

export default Carousel;