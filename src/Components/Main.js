import React, { Component } from 'react'

export class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
          backgroundColor:"white",
        };
      }
    showColor = ()=>{
      document.getElementById("pick").hidden = false;        
    };
    pickRed = ()=>{
      this.setState({backgroundColor:"red"});
      document.getElementById("pick").hidden = true;
    }
    pickGreen = ()=>{
      this.setState({backgroundColor:"green"});
      document.getElementById("pick").hidden = true;
    }
    pickBlue = ()=>{
      this.setState({backgroundColor:"blue"});
      document.getElementById("pick").hidden = true;
    }
    pickYellow = ()=>{
      this.setState({backgroundColor:"yellow"});
      document.getElementById("pick").hidden = true;
    }
    pickPurple = ()=>{
      this.setState({backgroundColor:"Purple"});
      document.getElementById("pick").hidden = true;
    }
    pickAqua = ()=>{
      this.setState({backgroundColor:"aqua"});
      document.getElementById("pick").hidden = true;
    }
    pickBrown = ()=>{
      this.setState({backgroundColor:"brown"});
      document.getElementById("pick").hidden = true;
    }
    pickPink = ()=>{
      this.setState({backgroundColor:"pink"});
      document.getElementById("pick").hidden = true;
    }
    pickLg = ()=>{
      this.setState({backgroundColor:"lightgreen"});
      document.getElementById("pick").hidden = true;
    }
    pickLb = ()=>{
      this.setState({backgroundColor:"lightskyblue"});
      document.getElementById("pick").hidden = true;
    }
    pickWhite = ()=>{
      this.setState({backgroundColor:"white"});
      document.getElementById("pick").hidden = true;
    }
    pickOrange = ()=>{
      this.setState({backgroundColor:"orange"});
      document.getElementById("pick").hidden = true;
    }
  render() {
    return (
        <div>
            <br/>
            <br/>
            <h1 style={{textAlign:"center"}}>Color Picker</h1>
            <div style={{width:"80vw", height:"70vh", marginLeft:"10vw", backgroundColor:this.state.backgroundColor, borderRadius:"10px"}}>
                <div class="container text-center" style={{height:"10vh", width:"80vw", marginTop:"25vh", position:"absolute"}}>
                    <div class="row" id="pick" hidden>
                        <div class="col">
                          <button onClick={this.pickRed} style={{height:"10vh", width:"10vh", backgroundColor:"red", border:"0", boxShadow: '1px 2px 9px black'}}></button>                            
                        </div>
                        <div class="col">
                          <button onClick={this.pickGreen} style={{height:"10vh", width:"10vh", backgroundColor:"green", border:"0", boxShadow: '1px 2px 9px black'}}></button>                            
                        </div>
                        <div class="col">
                          <button onClick={this.pickBlue} style={{height:"10vh", width:"10vh", backgroundColor:"blue", border:"0", boxShadow: '1px 2px 9px black'}}></button>                            
                        </div>
                        <div class="col">
                          <button onClick={this.pickYellow} style={{height:"10vh", width:"10vh", backgroundColor:"yellow", border:"0", boxShadow: '1px 2px 9px black'}}></button>                            
                        </div>
                        <div class="col">
                          <button onClick={this.pickPurple} style={{height:"10vh", width:"10vh", backgroundColor:"purple", border:"0", boxShadow: '1px 2px 9px black'}}></button>                            
                        </div>
                        <div class="col">
                          <button onClick={this.pickAqua} style={{height:"10vh", width:"10vh", backgroundColor:"aqua", border:"0", boxShadow: '1px 2px 9px black'}}></button>                            
                        </div>
                        <div class="col">
                          <button onClick={this.pickBrown} style={{height:"10vh", width:"10vh", backgroundColor:"brown", border:"0", boxShadow: '1px 2px 9px black'}}></button>                            
                        </div>
                        <div class="col">
                          <button onClick={this.pickPink} style={{height:"10vh", width:"10vh", backgroundColor:"pink", border:"0", boxShadow: '1px 2px 9px black'}}></button>                            
                        </div>
                        <div class="col">
                          <button onClick={this.pickLb} style={{height:"10vh", width:"10vh", backgroundColor:"lightskyblue", border:"0", boxShadow: '1px 2px 9px black'}}></button>                            
                        </div>
                        <div class="col">
                          <button onClick={this.pickLg} style={{height:"10vh", width:"10vh", backgroundColor:"lightgreen", border:"0", boxShadow: '1px 2px 9px black'}}></button>                            
                        </div>
                        <div class="col">
                          <button onClick={this.pickWhite} style={{height:"10vh", width:"10vh", backgroundColor:"white", border:"0", boxShadow: '1px 2px 9px black'}}></button>                            
                        </div>
                        <div class="col">
                          <button onClick={this.pickOrange} style={{height:"10vh", width:"10vh", backgroundColor:"orange", border:"0", boxShadow: '1px 2px 9px black'}}></button>                            
                        </div>
                    </div>
                </div>
                <button type="button" onClick={this.showColor} style={{marginLeft:"35vw", marginTop:"40vh", position:"absolute"}} className="btn btn-success">Pick a color</button>
            </div>
        </div>
    )
  }
}

export default Main
