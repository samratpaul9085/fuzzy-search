const ip='http://127.0.0.1:8000/';
export const availableWords = () =>{
  return fetch(`${ip}get-words`, 
  {
    method: "GET",
    headers: 
    {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  }).then(res => res.json())
}