import React from 'react';

function TechIndicator(props: any) {
    return (
        <div className='tech_container'>
            <span>{props.name}</span>
            <div className='lvl_container'>
                <div className='lvl_indicator' style={{ width: props.widthind }}></div>
            </div>
        </div>
    );
}

export default TechIndicator;