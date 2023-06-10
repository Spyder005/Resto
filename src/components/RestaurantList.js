import React ,{Component} from 'react';
import { Table } from 'react-bootstrap';
import reactRouterDom, {
    Link
  } from 'react-router-dom';
import{ FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{ faCoffee ,faEdit,faTrash} from '@fortawesome/free-solid-svg-icons'

class RestaurantList extends Component{

    constructor(){
        super();
        this.state={
            list:null,
        }
    }
     
    getData(){
        fetch("http://localhost:3000/restaurant").then((response)=>{
            response.json().then((result)=>{
                this.setState({list:result});
            })
        })
    }

    componentDidMount(){
         this.getData();
    }

    delete(id){
        fetch('http://localhost:3000/restaurant/'+id,{
            method: 'Delete',
        //     headers: {
        //      'Content-Type': 'application/json'
        //    },
           
         }).then((result)=>{
           result.json().then((resp) => {
            this.getData();
             alert(`RESTAURANT ${this.state.id} HAS BEEN DELETED!`);
         })
      
          })
         

    }
   
  
   render() {
       return(
       <div>
            <h1>Restaurant List</h1>
            {
                this.state.list?
                <div>
 
                <Table striped bordered hover >

                <thead className='table-light'>
                 <tr>
                 <th scope="col">#</th>
                 <th scope="col">Name</th>
                 <th scope="col">Email</th>
                 <th scope="col">Rating</th>
                 <th scope="col">Location</th>
                 <th >Update</th>
                 <th >Delete</th>
                 </tr>
                 </thead>

                 <tbody>  
                 { this.state.list.map((item,i)=>
                     <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.rating}</td>
                        <td>{item.address}</td>
                        <td><Link to={"/update/"+item.id}><FontAwesomeIcon icon={faEdit}/></Link></td>
                        <td><span onClick={()=>this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color='red'/></span></td>
                     </tr> 
                    
                    )
                }
                </tbody>
                </Table>
                    </div>
                   :<p>Please Wait...</p>
          

              }
       
       </div>
       );
   }

}

export default RestaurantList;