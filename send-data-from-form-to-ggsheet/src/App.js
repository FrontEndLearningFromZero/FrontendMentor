import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const postAction = "https://script.google.com/macros/s/AKfycbydYApBb4vn1i_IFI8NBQC1cK24X4A4rJWyI1lIfNf-SltWVAt-_us1-9PQq5M5Q-PeEQ/exec"
  const getAction = "https://script.google.com/macros/s/AKfycbxZDH9JcrBdp2MTIrV5uK8_K5twH77zc-bS8ITr6ug08tEbVj3LOLcZahxAD5BttpdFlg/exec"
  
  const userInfo = {
    name: 'John',
    mail: 'john@gmail.com',
    phone: '0901234567',
    message: 'test',
    checkIn: true
  }
  
  const [ user, setUser ] = useState(userInfo)
  let header = []
  let content = []

  useEffect(()=>{
    fetch(getAction)
    .then(res => res.json())
    .then(data => {
      header = data[0]

      let tmpArr = data.slice(1)
      for(var i = 0; i < tmpArr.length; i++) {
        let obj = {}
        var rowArr = tmpArr[i]
        for(var j=0; j < rowArr.length; j++) {
          obj[header[j]] = rowArr[j]
        }
        content.push(obj)
      }
    })
    console.log(content)
  },[])

  return (
    <div className="App">
      <div>
        <form className="form" method="POST" action={postAction}>
          <input placeholder="Your Name" name="Username" type="text" value={user['name']} onChange={(e)=>setUser({...user, name: e.target.value})}/>
          <input placeholder="Your Email" name="Email" type="text" value={user['mail']} onChange={(e)=>setUser({...user, mail: e.target.value})}/>
          <input placeholder="Your Phone" name="Phone" type="text" value={user['phone']} onChange={(e)=>setUser({...user, phone: e.target.value})}/>
          <input placeholder="Your Message" name="Message" type="text" value={user['message']} onChange={(e)=>setUser({...user, message: e.target.value})}/>
          <input name="CheckIn" type="checkbox" defaultChecked={user['checkIn']} value={user['checkIn']} />
          <button type="submit" name="Submit" value="submit">Submit</button>
        </form>
      </div>

    </div>
  );
}

// https://www.youtube.com/playlist?list=PLCWrLhzYkkf5earV5KmsY1mZBW1k__zQf
// AKfycbyidsrotkrWIZvR9MZgxWMReyMXnVH3AxwA2HSWiRLqx67v1UeY09sz3Qfi6kdevRj-WQ
// https://script.google.com/macros/s/AKfycbyidsrotkrWIZvR9MZgxWMReyMXnVH3AxwA2HSWiRLqx67v1UeY09sz3Qfi6kdevRj-WQ/exec
