import styled from 'styled-components';
import Calendar from "./Calendar";
import Ecomerce from './E-comerce';
import Travel from "./Travel"
import { yellow, blue,pink,green } from "../components/utils/index";
import { useState } from 'react';
const data=[
 
  "Camp",
  "Calendar",
  "Ecomerce"
,
]

const Section = styled.div`
  height: 100vh;
  scroll-snap-align:center;
  display:flex;
  justify-content:center;
`
const Container= styled.div`
width:1400px;
display:flex;
justify-content:space-between;

@media only screen and (max-width:768px) {
  width:100%;
  flex-direction:column;
 }
`

const Left = styled.div`
flex:1
display:flex;
align-items:center;
margin-top:230px;
@media only screen and (max-width:768px){
  padding:20px;
  justify-content:center;
}

`

const Leftiright=styled.div`
flex:1;
display:flex;
align-items:center`

const List= styled.ul`
list-style:none;
display:flex;
flex-direction:column;
gap:20px
`

const ListItem=styled.li`
font-size:90px;
font-weight:bold;
cursor:pointer;
color:transparent;
-webkit-text-stroke:1px white;
position: relative;
 
@media only screen and (max-width:768px){
  font-size:24px;
  color:white;
  -webkit-text-stroker:0px;
}

 ::after{
  content:"${(props)=>props.text}";
  position:absolute;
  top:0;
  left:0;
  color: ${(props) =>
    props.color ? props.color["60"] : green["60"]};;;
  width:0px;
  overflow:hidden;
  white-space:nowrap;
 }
 
 &:hover{
  ::after{
    animation: moveText 0.5s linear both;

    @keyframes moveText  {
       to {
        width:100%
       }
    }
  }
 }

`

const Right= styled.div`
flex:1;
margin-top:230px;`
const StyledImg=styled.img`
width:800px;
height:600px;
object-fit:contain;
position:relative;
top:90px;
bottom:0;
left:100;
right:0;
margin:auto;
animation:animate 2s infinite ease alternate;
@keyframes animate{
  to{
    transform: translateY(20px)
  }
}`
const  Works =()=>{
  const [work,setWork]=useState("Calendar")
    return(
        <Section>
       <Container>
        <Left>
      
          <List>
            {data.map((item)=>(
              <ListItem key={item} text={item} onClick={()=>setWork(item)}>
               {item}
            </ListItem>
            ))}
            
          </List>
       
        
        </Left>
        <Right>
         {work  === "Calendar" 
         ?(
          <Calendar/>
         ):work ==="Ecomerce" ?(
          <Ecomerce/>
         ): (
          <Travel/>
         )}
       
        </Right>
    
       </Container>
        </Section>
    )
}

export default Works