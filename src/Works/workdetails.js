import React from 'react';
import './workdetails.css';


class Workdetails extends React.Component{
    render(){
        let output = null;
        output = (
            <div className="work-details slide-right">
                <p className="h1 text-muted  text-center" >{this.props.details} This is Fixed This is Fixed This is Fixed This is Fixed This is Fixed</p>
            </div>
        )

        return(output);
    };
}

export default Workdetails;