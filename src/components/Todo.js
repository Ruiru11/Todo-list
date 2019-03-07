import React from "react";
import { Container, Divider } from "semantic-ui-react";

const Todo = props => {
 
    const completedTodo = {
        fontStyle:"italic",
        textDecoration:"line-through",
        color:"red",
        textAlign:"center "
    }
    const ContainerStyle = {
        marginTop:"5%",
        backgroundColor:"orange",
        width:"40%",
        marginLeft:"20%",
        height:100
    }
  return (
    <div>
      <Container style={ContainerStyle}>
      <Divider />
        <input
        type="checkbox"
        checked={props.completed}
        onChange={()=> props.handleChange(props.id)}
         />
         <p style={props.completed ? completedTodo : null}>{props.item}</p>
      </Container>
    </div>
  );
};

export default Todo;
