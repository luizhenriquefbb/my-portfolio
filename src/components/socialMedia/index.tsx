import React from "react";


import './socialMedia.css';

const socialMedias = [
    { href: "https://www.linkedin.com/in/luizhenriquefbb/", className:"linkedin",  title: "Connect on Linkedin", textToShow:"Connect on Linkedin"},
    { href: "https://www.github.com/luizhenriquefbb/", className:"github",    title: "Follow on GitHub", textToShow:"Follow on GitHub"},
    { href: "https://www.facebook.com/luizhenrique.freirebarros/", className:"facebook",  title: "Follow on Facebook", textToShow:"Follow on Facebook"},
    { href: "https://twitter.com/luizhenriquefbb", className:"twitter",   title: "Follow on Twitter", textToShow:"Follow on Twitter"},
]

const SocialMedia: React.FC = () => {

    return <>
        <div className="follow-me">
            <ul>
                <li>
                    <small>Follow me</small>
                </li>

                {socialMedias.map((socialMedia, index) => {
                    return (
                        <li>
                            <a className={socialMedia.className} target="_blank" href={socialMedia.href} title={socialMedia.title}>
                                <span>{socialMedia.textToShow}</span>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    </>

}

export default SocialMedia;