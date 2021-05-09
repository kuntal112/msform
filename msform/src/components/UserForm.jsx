import React, { Component } from 'react'
import PersonalInfo from './PersonalInfo';
import ProfessionalInfo from './ProfessionalInfo';
import DocsUpload from './DocsUpload';
import Confirm from './Confirm';
import Success from "./Success";

// not using doc2 & doc3
export default class UserForm extends Component {
    state = {
        step: 1,
        firstName: "",
        lastName: "",
        mobileNumber: "",
        address: "",
        lastEduQualifiation: "",
        companyName: "",
        designation: "",
        skills: "",
        doc1: "",
        doc2: "",
        doc3: ""
    }
    toNextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 })
    }
    toPrevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 })
    }
    changeHandler=field=>e=>{
        this.setState({[field]:e.target.value});
    }
    fileHandler=(file,field)=>{
        this.setState({[field]:file})
    }
    
    render() {
        const { step,
            firstName,
            lastName,
            mobileNumber,
            address,
            lastEduQualifiation,
            companyName,
            designation,
            skills,
            doc1,
            doc2,
            doc3 } = this.state;
            const values={ step,
                firstName,
                lastName,
                mobileNumber,
                address,
                lastEduQualifiation,
                companyName,
                designation,
                skills,
                doc1,
                doc2,
                doc3};
            switch (step){
                case 1:
                    return <PersonalInfo values={values} changeHandler={this.changeHandler} toNextStep={this.toNextStep}/>
                
                case 2:
                    return <ProfessionalInfo values={values} changeHandler={this.changeHandler} toNextStep={this.toNextStep} toPrevStep={this.toPrevStep}/>
                
                case 3:
                    return  <DocsUpload values={values} fileHandler={this.fileHandler} toNextStep={this.toNextStep} toPrevStep={this.toPrevStep}/>
                case 4:
                    return <Confirm  toNextStep={this.toNextStep} values={values} toPrevStep={this.toPrevStep}/>
                default:
                    return <Success/>
            }
       
    }
}
