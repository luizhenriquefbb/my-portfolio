import React from 'react';

import "./portfolio.css";


interface ProjectProps { description:string, title:string, images:string[], imgPosition:string, link:string }
const Project: React.FC<ProjectProps> = (props) => {

    const { description, title, images, imgPosition, link } = props;

    const renderImages = () => {
        return (
            <div className="images-wrapper">
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
                        <h2 className="title">{title}</h2>


                        {description}

                    </div>

                    {imgPosition === "right" && renderImages() }


                </div>
                <div className="footer">
                    <a className="link" href={link} target="_blank" rel="noopener noreferrer">
                        <button className="view-btn">
                            VIEW
                        </button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Project;