import { useEffect, useState } from "react";
import "./App.css";

function GetData() {
  const getAction = "https://script.google.com/macros/s/AKfycbxZDH9JcrBdp2MTIrV5uK8_K5twH77zc-bS8ITr6ug08tEbVj3LOLcZahxAD5BttpdFlg/exec"
  const postAction = "https://script.google.com/macros/s/AKfycbydYApBb4vn1i_IFI8NBQC1cK24X4A4rJWyI1lIfNf-SltWVAt-_us1-9PQq5M5Q-PeEQ/exec"

  const [userData, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [ user, setUser ] = useState(userData)

  useEffect(()=>{
    setLoading(true)
    fetch(getAction)
    .then(res => res.json())
    .then(data => {
      setData(data)
      setLoading(false)
    })
    },[])

    if (loading) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      )
    }
    console.log(userData)
    return (
      <div>
        {userData.map((data, index) =>{
          return (
            <div key={index}>
              <form className="form" method="POST" action={postAction} key={index}>
                <input placeholder="Your Name" name="Username" type="text" value={data[0]} onChange={(e)=>setUser({...user, name: e.target.value})}/>
                <input placeholder="Your Email" name="Email" type="text" value={data[1]} onChange={(e)=>setUser({...user, mail: e.target.value})}/>
                <input placeholder="Your Phone" name="Phone" type="text" value={data[2]} onChange={(e)=>setUser({...user, phone: e.target.value})}/>
                <input placeholder="Your Message" name="Message" type="text" value={data[3]} onChange={(e)=>setUser({...user, phone: e.target.value})}/>
                <input name="CheckIn" type="checkbox" checked={data[4]} />
                <button type="submit" name="Submit" value="submit">Submit</button>

              </form>
            </div>
          )}
        )}
      </div>
    )
  }


export default function App() {

  return (
    <>
        <div className="App">
        <form>
                <input value="Username" disabled/> 
                <input value="Email" disabled/> 
                <input value="Message" disabled/> 
                <input type="checkbox" disabled/> 
                <input value="Button" disabled/> 
              </form>
        <GetData />
    </div>

    </>
  );
  }

// https://www.youtube.com/playlist?list=PLCWrLhzYkkf5earV5KmsY1mZBW1k__zQf
// AKfycbyidsrotkrWIZvR9MZgxWMReyMXnVH3AxwA2HSWiRLqx67v1UeY09sz3Qfi6kdevRj-WQ
// https://script.google.com/macros/s/AKfycbyidsrotkrWIZvR9MZgxWMReyMXnVH3AxwA2HSWiRLqx67v1UeY09sz3Qfi6kdevRj-WQ/exec
