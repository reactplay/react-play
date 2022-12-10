import {useEffect} from 'react'
export default function Grid() {
  useEffect(()=>{
    let output = ''
    for (let i = 0; i < 15; i++) {
      output += `<tr>`
      for (let j = 0; j < 20; j++) {
        output += `<td style="padding:0; border:1px solid lightblue"></td>`
      }
      output += `</tr>`
    }
    
    document.getElementById("table").innerHTML = output
  },[])
  return (
    <table
      id ="table"
      style={{
        width: "100%",
        height: "70vh",
        alignSelf: "center",
        marginTop:"10px"
      }}
    />
  );
}