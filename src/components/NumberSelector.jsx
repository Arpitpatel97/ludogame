
import styled from "styled-components"
import { useState } from "react";
const NumberSelector = () => {

   const arr=[1,2,3,4,5,6];
    const [selectNumber,setSelectNumber]=useState();
    console.log(selectNumber);
  return (
    <NumberSelectorContainer>
      <div className="flex">
    {
      arr.map((value,i)=>(
        <Box 
        isSelected={selectNumber===value}
        key={i} onClick={()=>setSelectNumber(value)}>{value}
        </Box>
       
      ))}
  
</div>
<p>
     Select Number
   </p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector
  

const Box=styled.div`
     height:72px;
     width:72px;
     border:1px solid black;
     display:grid;
     place-items:center;
     font-weight:700;
     font-size:24px;
     background-color:${(props)=>(props.isSelected ?"black":"white")};
     color:${(props)=>(!props.isSelected ?"black":"white")};
`;


const NumberSelectorContainer=styled.div`
display:flex;
flex-direction:column;
align-items:end;
   .flex{
   display:flex;
   gap:24px;

   alig-items:end;
   }
    p{
    font-size:24px;
    font-weight:700px;
    
    }

`