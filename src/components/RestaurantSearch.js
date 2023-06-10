import React, { Component } from 'react'
import { Table ,Form,Container} from 'react-bootstrap';

export default class RestaurantSearch extends Component {

    constructor(){
      super();
      this.state={
            searchData:null,
            noData:false
      }
    }

    search(data){
      fetch('http://localhost:3000/restaurant?q='+data).then((result)=>{
        result.json().then((resp)=>{
          console.warn("resp",resp)
          if(resp.length > 0){
          this.setState({searchData:resp,noData:false});
          }
          else{
            this.setState({searchData:null,noData:true});
          }
          
      })
    })
  }
  render() {
    return (
      <Container>
        <h1>Restaurant Search</h1>
        <input type='text' className="form-control" style={{backgroundColor:'grey',color:'white'}} placeholder='Search Here' onChange={(event)=>{this.search(event.target.value)}}/>
     
       <div>
            { 
               this.state.searchData?
               <div>
                   
                    
                    <Table striped bordered hover  my-3>

                    <thead className='table-light'>
                     <tr>
                     {/* <th scope="col">#</th> */}
                     <th scope="col">Name</th>
                     <th scope="col">Email</th>
                     <th scope="col">Rating</th>
                     <th scope="col">Location</th>
                     
                     </tr>
                     </thead>
    
                     <tbody>  
                     { this.state.searchData.map((item)=>
                         <tr>
                            {/* <td>{item.id}</td> */}
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.rating}</td>
                            <td>{item.address}</td>
                           
                         </tr> 
                        
                        )
                    }
                    </tbody>
                    </Table>
                    
                                               
                    

                   
               </div>
               : null
              // : <div> Search not found</div>   
            }

           {
            this.state.noData?<div>Search not found</div>:null
           }
       </div>
     
     
      </Container>
    )
  }
}
