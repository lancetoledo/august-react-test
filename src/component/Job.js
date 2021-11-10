import React from 'react'
// How do we pass our props in
export default function Job() {
    

    const applyNow = () => {
        // How can you open a new window with the link to job applicayion?
    }


    return (
        <div className="job-tile">
        <div className="top">
            {/* Replace the image and spans with the corresponding job values! */}
            <img src= "https://pbs.twimg.com/profile_images/1871386426/TSIconButtonSM_400x400.png" alt=""/>
            <span id="company" className="material-icons more_horiz">TekStrea</span>
        </div>
        <div className="rolename">
            <span>Pega Developer - 100% Remote</span>
        </div>
        <div className="description">
            <span>Needs to be experienced in the PEGA platform on at least 7.22 with PEGA 8.x preferred. zz</span>
        </div>
        <div className="buttons">
            <div className="button apply-now" onClick = {applyNow}>
                Apply Now
            </div>
            <div className="button">
                Message
            </div>
        </div>                
    </div>
    )
}
