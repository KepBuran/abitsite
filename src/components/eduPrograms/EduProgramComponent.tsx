import React from 'react';
import '../../styles/pages/EduProgram.css'

const EduProgramComponent = () => {
    return (
        <div className="eduprogram">
            <p className="eduprogram-name">Освітня програма 122 СП</p>
            <div className="iframe-wrapper">
                <iframe seamless src="https://docs.google.com/spreadsheets/d/17FeXSt2R8LFGZHMscc-i3muM3rF3nZdaryx1uIp7Oc0/edit#gid=1854195236" name="iframe_a" height="300px" width="100%" title="Iframe Example"></iframe>
            </div>
        </div>
    );
};

export default EduProgramComponent;