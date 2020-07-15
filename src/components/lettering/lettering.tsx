import React from 'react';
import './lettering.css';

interface LetteringProps { text:string[], title :string, image?:string }
const Lettering = ({ text = [], title = '', image = "" }: LetteringProps) => {
  const renderText = () => {
    return text && text.length
      ? text.map((line, index) => {
          return <p key={`${index}`}>{line}</p>;
        })
      : null;
  };

  return (
    <div className="container">
      <div className="lettering row col-md-12">
        {image ? (
          <div className="col-md-6 col-sm-12">
            <img src={image}/>
          </div>
        )
        : <></>}

        <div className={image ? "col-md-6 col-sm-12" : "col-md-12"}>
          <h1>{title}</h1>
          {renderText()}
        </div>
      </div>
    </div>
  );
};

export default Lettering;
