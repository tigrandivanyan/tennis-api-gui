import './App.css';
import Requestor from './Requestor';
import axios from 'axios';
import {useEffect, useState} from "react";

type TRequest = {path:string, placeholder?:string, query?:string[], body?:string[]}
type TResponse = {name:string}

export interface IRequestorProps {
    name:string,
    type:"GET" | "POST",
    request:TRequest,
    response:TResponse
}

const data:IRequestorProps[] = [
    {name:"Счеты", type:"GET", request:{path:'/scores/', query:["tournamentID", "gameID", "setNumber", "value"]}, response:{name:"smth"}},
    {name:"Пкфашлш", type:"GET", request:{path:'/schedule/', query:["tournamentID", "scheduleType"]}, response:{name:"smth"}},
    {name:"Пкфашлш", type:"GET", request:{path:'/get-players/all', query:["tournamentID", "scheduleType"]}, response:{name:"smth"}},
    {name:"Пкфашлш", type:"GET", request:{path:'/get-players/active', query:["tournamentID", "scheduleType"]}, response:{name:"smth"}},
    {name:"Пкфашлш", type:"GET", request:{path:'/tournament-times/', query:["date"]}, response:{name:"smth"}},
]

function App() {
    const [requestor, setRequetor] = useState<IRequestorProps>(data[0]);

    return (
        <div className="App">
            <select onChange={({ target: { value } }) => setRequetor(data[parseInt(value)])}>
                {
                    data.map((req_type, index) => {
                        return <option value={index}>{req_type.name}</option>
                    })
                }
            </select>
            <Requestor type={requestor.type} name={requestor.name} request={requestor.request} response={requestor.response} />
        </div>
    );
}

export default App;
