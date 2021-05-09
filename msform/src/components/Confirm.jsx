import React, { Component } from 'react'

export default class Confirm extends Component {
    state = {
        docUrl: "",
        errno:""
    }
    goPrevPage = (e) => {
        e.preventDefault();
        this.props.toPrevStep();
    }
    uploadFields = () => {
        fetch("/signup", {
            method: "post",
            body:
                JSON.stringify({
                    firstName:this.props.values.firstName,
                    lastName:this.props.values.lastName,
                    mobileNumber:this.props.values.mobileNumber,
                    address:this.props.values.address,
                    lastEduQualifiation:this.props.values.lastEduQualifiation,
                    companyName:this.props.values.companyName,
                    designation:this.props.values.designation,
                    skills:this.props.values.skills,
                    doc1:this.state.docUrl,
                }),
                headers:{
                    "Content-Type":"application/json",
                }

        })
        .then(res=>res.json())
        .then(result=>{this.setState({errno:result.message})
        
            this.props.toNextStep();
        })
        .catch(err=>console.log(err))
    }
    postImage = () => {
        if((this.props.values.firstName==="" || this.props.values.mobileNumber==="" || this.props.values.lastEduQualifiation==="" || this.props.values.skills==="" || this.props.values.doc1==="")){
            return this.setState({errno:"*please fill all required fields"});
        }
        const data = new FormData();
        data.append("file", this.props.values.doc1);
        // data.append("file",this.props.values.doc2);
        // data.append("file",this.props.values.doc3);
        data.append("upload_preset", "msform");
        data.append("cloud_name", "mycld");
        fetch("	https://api.cloudinary.com/v1_1/mycld/raw/upload", {
            method: "post",
            body: data
        }).then(res => res.json())
            .then(result => {
                this.setState({ docUrl: result.url }, () => {
                    this.uploadFields();
                })
            }).catch(err => console.log(err));

    }

    render() {
        const { values: { firstName,
            lastName,
            mobileNumber,
            address,
            lastEduQualifiation,
            companyName,
            designation,
            skills,
            doc1,
            doc2,
            doc3 } } = this.props;
        return (
            <div className="container">
                <h1>Confirm & Submit</h1>
                <div className="data-forms confirmdiv">
                <ul className="inputfield-list">
                   
                    <li><span className="field">First Name</span><span className="value">{firstName}</span></li>
                    <li><span className="field">Last Name</span><span className="value">{lastName}</span></li>
                    <li><span className="field">Mobile Number</span ><span className="value">{mobileNumber}</span></li>
                    <li><span className="field">Address</span><span className="value">{address}</span></li>
                    <li><span className="field">Highest Qualification</span><span className="value">{lastEduQualifiation}</span></li>
                    <li><span className="field">Company Name</span><span className="value">{companyName}</span></li>
                    <li><span className="field">Your Designation</span><span className="value">{designation}</span></li>
                    <li><span className="field">Skills</span><span className="value">{skills}</span></li>
                    <li><span className="field">Doc 1</span><span className="value">{doc1.name}</span></li>
                    {/* <li><span>Doc 2</span><span>{doc2.name}</span></li>
                    <li><span>Doc 3</span><span>{doc3.name}</span></li> */}
                     {this.state.errno&&<li style={{color:"red"}}>{this.state.errno}</li>}
                    <div className="buttoncont">
                        
                        <button onClick={this.goPrevPage}>Back</button>
                    <button onClick={this.postImage}>submit</button>
                        </div>
                </ul>
                </div>
            </div>
        )
    }
}
