import React from 'react';
import { AwesomeButton } from 'react-awesome-button';

import "./portfolio.css";

interface PortfolioProps { text: JSX.Element[], title: string, image: string, link:string }
const Portfolio = ({ text = [], title = '', image = "", link }: PortfolioProps) => {
    const renderText = () => {
        return text && text.length
            ? text.map((line, index) => {
                return line;
            })
            : null;
    };

    return (
        <div className="container portfolio-container">
            <div className="lettering row col-md-12">
                {image ? (
                    <div className="col-md-6 col-sm-12">
                        <img src={image} />
                    </div>
                )
                    : <></>}

                <div className={image ? "col-md-6 col-sm-12" : "col-md-12"}>
                    <h1>{title}</h1>
                    {renderText()}
                </div>

                <div className={(image ? "col-sm-12" : "col-md-12") + " action"} >

                    <AwesomeButton>
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            Visit project
                        </a>
                    </AwesomeButton>
                </div>


            </div>
        </div>
    );
};

export default Portfolio;
