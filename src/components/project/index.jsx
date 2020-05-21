import React from 'react';

import "./portfolio.css";
export default function (props) {

    const { description, title, images, imgPosition } = props;

    const renderImages = () => {
        return (
            <div>
                {images.map((image, index) => {
                    return (<img src={image} alt="Project" key={index} />)
                })}
            </div>
        )
    }

    return (
        <>
            <div className="portfolio-container container">
                <div className="project-container">
                    {imgPosition === "left" && renderImages()}

                    <div>
                        <h2>{title}</h2>


                        {description}

                    </div>

                    {imgPosition === "right" && renderImages() }


                </div>
                <a className="link" href="http://" target="_blank" rel="noopener noreferrer">
                    <button className="view-btn">
                        VIEW
                    </button>
                </a>
            </div>
        </>
    )
}