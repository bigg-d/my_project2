import React, { createContext, useState } from 'react';
const ImagesContext = createContext()
export const ImageProvider = ({children}) =>{
    const [images, setImages] = useState([])

    const imagePaths = [
        '../images/listImage/img1.webp',
        '../images/listImage/img2.webp',
        '../images/listImage/img3.webp',
        '../images/listImage/img4.webp',
        '../images/listImage/img5.webp',
        '../images/listImage/img6.webp',
        '../images/listImage/img7.webp',
        '../images/listImage/img8.webp',
        '../images/listImage/img9.webp',
        '../images/listImage/img10.webp',
        '../images/listImage/img11.webp',
    ];

    
    imagePaths.map((path) => {
        const image = new Image();
        image.src = path;
        images.push(image)
    })   
    
    return(
        <ImagesContext.Provider value={{images }}>
            {children}
        </ImagesContext.Provider>
    )

}
export default ImagesContext