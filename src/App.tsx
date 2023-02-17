import './App.css';
import Requestor from './Requestor';

type TRequest = {path:string, placeholder?:string, query?:string[], body?:string[]}
type TResponse = {name:string}

export interface IRequestorProps {
    name:string,
    type:"GET" | "POST",
    request:TRequest[],
    response:TResponse[]
}

const data:IRequestorProps[] = [
  {name:"Счеты", request:{path:'/scores/', query:[]}}
]

function App() {
  return (
    <div className="App">
      {data.map(requestor => {
        return <Requestor name={requestor.name} request={requestor.request} response={requestor.response} />
      })}
    </div>
  );
}

export default App;
