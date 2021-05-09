import React, { Component } from 'react'
export default class Success extends Component {
    backToHome=()=>{
        window.location.reload(false);
    }
    render() {
        return (
            <div className="" style={{color:"green",height:"100vh",margin:"auto",display:"flex"  }}>
            <div className="" style={{color:"green",height:"500px",margin:"auto", display:"flex" ,flexDirection:"column",justifyContent:"center",alignContent:"center"}}>
                <h1 style={{color:"green",height:"50px",}}>Successfully Signed Up</h1>
                <button onClick={this.backToHome} style={{color:"green",height:"50px",width:"150px"}}>Back To HOME</button>
            </div>
            </div>
        )
    }
}
