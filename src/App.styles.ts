import styled,{createGlobalStyle} from "styled-components";
export const GlobalStyle=createGlobalStyle`
html{
    height:100vh
}
body{
background-color: #D8BFD8;
    margin:0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    
}
*{
    box-sizing: border-box;
    font-family: "Catamaran" ,sans-serif;
}

`
export const Wrapper=styled.div`

display: flex;
flex-direction: column;
align-items: center;
>p{
    color: black;
}
.score{
    color: black;
    font-size: 2rem;
    margin: 0;
}
>h1 {
    font-family: Fascinate Inline;
    background: linear-gradient(90deg, rgba(0,0,0,1) 35%, rgba(238,0,177,1) 100%);
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }


.loading {
    left: 50%;
    top: 50%;
    font-size: 36px;
    font-family: serif;
    font-weight: bold;
    letter-spacing: 4.4px;
    text-transform: capitalize;
    position: absolute;
    overflow: hidden;
    transform: translate(-50%, -60%);
    
    &:before {
        color: #aaa;
        content: attr(data-loading-text);
    }
    
    &:after {
        top: 0;
        left: 0;
        width: 0;
        opacity: 1;
        color: #444;
        overflow: hidden;
        position: absolute;
        content: attr(data-loading-text);
        animation: loading 1s infinite;
    }
    
    @keyframes loading {
      0% { 
        width: 0; 
      }
      100% {
        width: 100%; 
      }
    }
}
.startBtn ,
.nextBtn
{
    margin: 20px 0;

    width: 220px;
    height: 50px;
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
}

.startBtn:before,
.nextBtn:before
{
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

.startBtn:active,
.nextBtn:active 
{
    color: #000
}

.startBtn:active::after ,
.nextBtn:active::after {
    background: transparent;
}

.startBtn:hover:before,
.nextBtn:hover:before
{
    opacity: 1;
}

.startBtn::after ,.nextBtn::after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}
    .startBtn {
    max-width: 200px;
  }
  .lastScore{
    font-size: 30px;
    color: #ee0049
  }
`