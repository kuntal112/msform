import React, { Component } from 'react'

export default class DocsUpload extends Component {
    
    goNextPage=(e)=>{
        e.preventDefault();
        this.props.toNextStep();
    }
    render() {
        const {values,fileHandler,toNextStep,toPrevStep}=this.props;
        return (
            <div className="container">
                <h1>Step:{values.step}</h1>
                <div className="data-forms">
                <div className="inputfield">
                <div>
                <label>Upload Resume (*)</label>
                <input 
                type="file" 
                onChange={e=>fileHandler(e.target.files[0],"doc1")}
                // onChange={e=>this.setState({doc1:e.target.files[0]})}
                />
                </div>
                {/* <div>
                <label>Last Name</label>
                <input 
                type="file" 
                onChange={e=>fileHandler(e.target.files[0],"doc2")}
                // onChange={e=>this.setState({doc2:e.target.files[0]})}
                />
                </div>
                <div>
                <label>Mobile Number</label>
                <input 
                type="file" 
                onChange={e=>fileHandler(e.target.files[0],"doc3")}
                // onChange={e=>this.setState({doc1:e.target.files[0]})}
                />
                </div> */}
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
