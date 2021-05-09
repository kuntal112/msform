import React, { Component } from 'react'

export default class PersonalInfo extends Component {
    goNextPage=(e)=>{
        e.preventDefault();
        this.props.toNextStep();
    }
    render() {
        const {values,changeHandler,toNextStep}=this.props;
        return (
            <div className="container">
                <h1>Step:{values.step}</h1>
                <div className="data-forms">
                <div className="inputfield">
                <div>
                <label>First Name (*)</label>
                <input 
                type="text" 
                value={values.firstName}
                onChange={changeHandler("firstName")}
                />
                </div>
                <div>
                <label>Last Name</label>
                <input 
                type="text" 
                value={values.lastName}
                onChange={changeHandler("lastName")}
                />
                </div>
                <div>
                <label>Mobile Number (*)</label>
                <input 
                type="text" 
                value={values.mobileNumber}
                onChange={changeHandler("mobileNumber")}
                />
                </div>
                <div>
                <label>Address</label>
                <textarea 
                cols="40"
                rows="8"
                value={values.address}
                onChange={changeHandler("address")}
                />
                </div>
                <div className="buttoncont">
                <button onClick={toNextStep}>Next</button>
                </div>
                </div>
                </div>
            </div>
        )
    }
}
