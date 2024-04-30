// import react from 'react';
// import ReactDOM from 'react-dom';
// import { NavLink } from "react-router-dom";
function Heading(){
    return(
        <h1>Topics Covered</h1>
    )
}
function Para1(){
    return(
        <p style={{fontSize:25}}>The following is a list of all the topics we cover in the MDN learning area.</p>
    )
}
function Link1(){
    return(
        <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web" style={{fontSize:20,color:'blue',textDecoration:'underline'}}>Getting started with the web</a>
    )
}
function Para2(){
    return(
        <p style={{fontSize:25}}>Provides a practical introduction to web development for complete beginners..</p>
    )
}
function Link2(){
    return(
        <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML" style={{fontSize:20,color:'blue',textDecoration:'underline'}}>HTML-Structuring the web</a>
    )
}
function Para3(){
    return(
        <p style={{fontSize:25}}>HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.</p>
    )
}
function Link3(){
    return(
        <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS" style={{fontSize:20,color:'blue',textDecoration:'underline'}}>CSS-Styling the web</a>
    )
}
function Para4(){
    return(
        <p style={{fontSize:25}}>CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.</p>
    )
}
ReactDOM.render(
<>
<Heading/>
<Para1/>
<Link1/>
<Para2/>
<Link2/>
<Para3/>
<Link3/>
<Para4/>
</>,document.querySelector('#root'))