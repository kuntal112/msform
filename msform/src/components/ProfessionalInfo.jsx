import React, { Component } from 'react'

export default class ProfessionalInfo extends Component {
    goNextPage=(e)=>{
        e.preventDefault();
        this.props.toNextStep();
    }
    render() {
        const {values,changeHandler,toNextStep,toPrevStep}=this.props;
        return (
            <div className="container">
                <h1>Step:{values.step}</h1>
                <div className="data-forms">
                <div className="inputfield">
                <div>
                <label>Highest Educational Qualification (*)</label>
                <input 
                type="text" 
                value={values.lastEduQualifiation}
                onChange={changeHandler("lastEduQualifiation")}
                />
                </div>
                <div>
                <label>Company Name</label>
                <input 
                type="text" 
                value={values.companyName}
                onChange={changeHandler("companyName")}
                />
                </div>
                <div>
                <label>Your Designation</label>
                <input 
                type="text" 
                value={values.designation}
                onChange={changeHandler("designation")}
                />
                </div>
                <div>
                <label>Skills (*)</label>
                <textarea 
                cols="40"
                rows="8"
                value={values.skills}
                onChange={changeHandler("skills")}
                />
                </div>
                <div className="buttoncont">
                <button onClick={toPrevStep}>Back</button>
                <button onClick={toNextStep}>Next</button>
                </div>
                </div>
                </div>
            </div>
        )
    }
}
