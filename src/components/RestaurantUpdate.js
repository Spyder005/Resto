import React, { Component } from 'react'
import { Form ,Container} from 'react-bootstrap'
export default class RestaurantUpdate extends Component {

  constructor(){
    super();
    this.state = {
      name:null,
      email:null,
      rating:null,
      address:null,
      id:null
    }
   }

  componentDidMount(){
   
     fetch('http://localhost:3000/restaurant/'+this.props.id).then((resp)=>{
      resp.json().then((result)=>{
        this.setState({
          name:result.name,
          email:result.email,
          rating:result.rating,
          address:result.address,
          id:result.id
        })
      })
     })

  }

  update(){
    fetch('http://localhost:3000/restaurant/'+this.state.id,{
      method: 'Put',
      headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(this.state)
   }).then((result)=>{
     result.json().then((resp) => {
       alert(`RESTAURANT ${this.state.id} HAS BEEN Updated!`);
   })

    })
   

  }


  render() {
    // console.warn(this.state.name)
    return (
      <Container>
        <h1>Restaurant Update</h1>
         
        <Form>
  <div className="mb-3">
    
    <input type="text" className="form-control" style={{backgroundColor:'grey',color:'white'}} value={this.state.name} placeholder='Restaurant Name' onChange={(e)=>this.setState({name:e.target.value})}/><br/> <br/>
    <input type="email" className="form-control" style={{backgroundColor:'grey',color:'white'}} value={this.state.email}  placeholder='Restaurant Email'onChange={(e)=>this.setState({email:e.target.value})}/><br/> <br/>
    <input  value={this.state.rating} className="form-control" style={{backgroundColor:'grey',color:'white'}} placeholder='Restaurant Rating'onChange={(e)=>this.setState({rating:e.target.value})}/><br/> <br/>
    <input value={this.state.address} className="form-control" style={{backgroundColor:'grey',color:'white'}}  placeholder='Restaurant Address'onChange={(e)=>this.setState({address:e.target.value})}/><br/> <br/>
    {/* <input value={this.state.id}  placeholder='Id'onChange={(e)=>this.setState({address:e.target.value})}/><br/> <br/>
     */}
  </div>
  
  
  <button type="submit" className="btn btn-primary" onClick={()=>{this.update()}}>Update</button>
</Form>

      </Container>
    )
  }
}

