import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { JsonViewer } from '@textea/json-viewer'

const sample_json = { "tournamentStats": {}, "tournamentStatus": "finished", "schedule": [ { "player1": { "id": "613f82a2b3101c526d1b504a", "name": "Арман Восканян" }, "player2": { "id": "628159363091b50908e93e22", "name": "Сероб Акопян" }, "referee": { "id": "627c098f3091b50908e93dc8", "name": "Армен Хачатрян" } }, { "player1": { "id": "613f82b1b3101c526d1b504e", "name": "Григор Восканян" }, "player2": { "id": "613f82eeb3101c526d1b505a", "name": "Айк Маргарян" }, "referee": { "id": "627c098f3091b50908e93dc8", "name": "Армен Хачатрян" } }, { "player1": { "id": "62415435ce38ddaf53108b27", "name": "Осик Минасян" }, "player2": { "id": "613a56a39baf79ec8b110d8e", "name": "Саргис Тигранян" }, "referee": { "id": "627c098f3091b50908e93dc8", "name": "Армен Хачатрян" } }, { "player1": { "id": "613f82a2b3101c526d1b504a", "name": "Арман Восканян" }, "player2": { "id": "613f82eeb3101c526d1b505a", "name": "Айк Маргарян" }, "referee": { "id": "6253d530ce38ddaf53108c5c", "name": "Геворг Закарян" } }, { "player1": { "id": "628159363091b50908e93e22", "name": "Сероб Акопян" }, "player2": { "id": "613a56a39baf79ec8b110d8e", "name": "Саргис Тигранян" }, "referee": { "id": "6253d530ce38ddaf53108c5c", "name": "Геворг Закарян" } }, { "player1": { "id": "613f82b1b3101c526d1b504e", "name": "Григор Восканян" }, "player2": { "id": "62415435ce38ddaf53108b27", "name": "Осик Минасян" }, "referee": { "id": "6253d530ce38ddaf53108c5c", "name": "Геворг Закарян" } }, { "player1": { "id": "613f82a2b3101c526d1b504a", "name": "Арман Восканян" }, "player2": { "id": "613a56a39baf79ec8b110d8e", "name": "Саргис Тигранян" }, "referee": { "id": "627c098f3091b50908e93dc8", "name": "Армен Хачатрян" } }, { "player1": { "id": "613f82eeb3101c526d1b505a", "name": "Айк Маргарян" }, "player2": { "id": "62415435ce38ddaf53108b27", "name": "Осик Минасян" }, "referee": { "id": "627c098f3091b50908e93dc8", "name": "Армен Хачатрян" } }, { "player1": { "id": "628159363091b50908e93e22", "name": "Сероб Акопян" }, "player2": { "id": "613f82b1b3101c526d1b504e", "name": "Григор Восканян" }, "referee": { "id": "627c098f3091b50908e93dc8", "name": "Армен Хачатрян" } }, { "player1": { "id": "613f82a2b3101c526d1b504a", "name": "Арман Восканян" }, "player2": { "id": "62415435ce38ddaf53108b27", "name": "Осик Минасян" }, "referee": { "id": "6253d530ce38ddaf53108c5c", "name": "Геворг Закарян" } }, { "player1": { "id": "613a56a39baf79ec8b110d8e", "name": "Саргис Тигранян" }, "player2": { "id": "613f82b1b3101c526d1b504e", "name": "Григор Восканян" }, "referee": { "id": "6253d530ce38ddaf53108c5c", "name": "Геворг Закарян" } }, { "player1": { "id": "613f82eeb3101c526d1b505a", "name": "Айк Маргарян" }, "player2": { "id": "628159363091b50908e93e22", "name": "Сероб Акопян" }, "referee": { "id": "6253d530ce38ddaf53108c5c", "name": "Геворг Закарян" } }, { "player1": { "id": "613f82a2b3101c526d1b504a", "name": "Арман Восканян" }, "player2": { "id": "613f82b1b3101c526d1b504e", "name": "Григор Восканян" }, "referee": { "id": "627c098f3091b50908e93dc8", "name": "Армен Хачатрян" } }, { "player1": { "id": "62415435ce38ddaf53108b27", "name": "Осик Минасян" }, "player2": { "id": "628159363091b50908e93e22", "name": "Сероб Акопян" }, "referee": { "id": "627c098f3091b50908e93dc8", "name": "Армен Хачатрян" } }, { "player1": { "id": "613a56a39baf79ec8b110d8e", "name": "Саргис Тигранян" }, "player2": { "id": "613f82eeb3101c526d1b505a", "name": "Айк Маргарян" }, "referee": { "id": "627c098f3091b50908e93dc8", "name": "Армен Хачатрян" } }, { "player1": { "id": "628159363091b50908e93e22", "name": "Сероб Акопян" }, "player2": { "id": "613f82a2b3101c526d1b504a", "name": "Арман Восканян" }, "referee": { "id": "6253d530ce38ddaf53108c5c", "name": "Геворг Закарян" } }, { "player1": { "id": "613f82eeb3101c526d1b505a", "name": "Айк Маргарян" }, "player2": { "id": "613f82b1b3101c526d1b504e", "name": "Григор Восканян" }, "referee": { "id": "6253d530ce38ddaf53108c5c", "name": "Геворг Закарян" } }, { "player1": { "id": "613a56a39baf79ec8b110d8e", "name": "Саргис Тигранян" }, "player2": { "id": "62415435ce38ddaf53108b27", "name": "Осик Минасян" }, "referee": { "id": "6253d530ce38ddaf53108c5c", "name": "Геворг Закарян" } }, { "player1": { "id": "613f82eeb3101c526d1b505a", "name": "Айк Маргарян" }, "player2": { "id": "613f82a2b3101c526d1b504a", "name": "Арман Восканян" }, "referee": { "id": "627c098f3091b50908e93dc8", "name": "Армен Хачатрян" } }, { "player1": { "id": "613a56a39baf79ec8b110d8e", "name": "Саргис Тигранян" }, "player2": { "id": "628159363091b50908e93e22", "name": "Сероб Акопян" }, "referee": { "id": "627c098f3091b50908e93dc8", "name": "Армен Хачатрян" } }, { "player1": { "id": "62415435ce38ddaf53108b27", "name": "Осик Минасян" }, "player2": { "id": "613f82b1b3101c526d1b504e", "name": "Григор Восканян" }, "referee": { "id": "627c098f3091b50908e93dc8", "name": "Армен Хачатрян" } }, { "player1": { "id": "613a56a39baf79ec8b110d8e", "name": "Саргис Тигранян" }, "player2": { "id": "613f82a2b3101c526d1b504a", "name": "Арман Восканян" }, "referee": { "id": "6253d530ce38ddaf53108c5c", "name": "Геворг Закарян" } }, { "player1": { "id": "62415435ce38ddaf53108b27", "name": "Осик Минасян" }, "player2": { "id": "613f82eeb3101c526d1b505a", "name": "Айк Маргарян" }, "referee": { "id": "6253d530ce38ddaf53108c5c", "name": "Геворг Закарян" } }, { "player1": { "id": "613f82b1b3101c526d1b504e", "name": "Григор Восканян" }, "player2": { "id": "628159363091b50908e93e22", "name": "Сероб Акопян" }, "referee": { "id": "6253d530ce38ddaf53108c5c", "name": "Геворг Закарян" } }, { "player1": { "id": "62415435ce38ddaf53108b27", "name": "Осик Минасян" }, "player2": { "id": "613f82a2b3101c526d1b504a", "name": "Арман Восканян" }, "referee": { "id": "627c098f3091b50908e93dc8", "name": "Армен Хачатрян" } }, { "player1": { "id": "613f82b1b3101c526d1b504e", "name": "Григор Восканян" }, "player2": { "id": "613a56a39baf79ec8b110d8e", "name": "Саргис Тигранян" }, "referee": { "id": "627c098f3091b50908e93dc8", "name": "Армен Хачатрян" } }, { "player1": { "id": "628159363091b50908e93e22", "name": "Сероб Акопян" }, "player2": { "id": "613f82eeb3101c526d1b505a", "name": "Айк Маргарян" }, "referee": { "id": "627c098f3091b50908e93dc8", "name": "Армен Хачатрян" } }, { "player1": { "id": "613f82b1b3101c526d1b504e", "name": "Григор Восканян" }, "player2": { "id": "613f82a2b3101c526d1b504a", "name": "Арман Восканян" }, "referee": { "id": "6253d530ce38ddaf53108c5c", "name": "Геворг Закарян" } }, { "player1": { "id": "628159363091b50908e93e22", "name": "Сероб Акопян" }, "player2": { "id": "62415435ce38ddaf53108b27", "name": "Осик Минасян" }, "referee": { "id": "6253d530ce38ddaf53108c5c", "name": "Геворг Закарян" } }, { "player1": { "id": "613f82eeb3101c526d1b505a", "name": "Айк Маргарян" }, "player2": { "id": "613a56a39baf79ec8b110d8e", "name": "Саргис Тигранян" }, "referee": { "id": "6253d530ce38ddaf53108c5c", "name": "Геворг Закарян" } } ] }

type TRequest = {path:string, placeholder?:string, query?:string[], body?:string[]}
type TResponse = {name:string}

export interface IRequestorProps {
    name:string,
    type:"GET" | "POST",
    request:TRequest,
    response:TResponse
}

const Requestor: React.FC<IRequestorProps> = ({name, type, request, response}) => {

    const params:any = useRef({})
    const [result, setResult] = useState<any>({})

    const makeRequest = () => {
        axios.get('http://10.200.102.206:3330' + request.path, {
            headers:{
                "Content-Type":"application/json",
                "key":"aRn0URqaiPO971nY"
            },
            params:Object.fromEntries(Object.entries(params.current).filter(([_, v]) => v != ''))
        })
            .then(res => {
                console.log(res);
                setResult(res.data)
            })
            .catch(err => {
                console.log(err)
                console.log(err.response)
                setResult(err.response)
            })
    }

    useEffect(() => {
        request.query?.forEach(param => params.current[param] = '')
    }, [])


    return (
      <div>
          {request.query?.map(param => {
              return(
                  <div className="param">
                      <p className="text">{param}:</p>
                      <input type="text" onChange={({target:{value}}) => params.current[param] = value}/>
                  </div>
              )
          })}
          <button onClick={makeRequest}>Go</button>
          {/*Make this work*/}
          {/*Sample json is located in sample_json variable*/}
          {/*<JsonViewer src={JSON.stringify(result, null, 2)}/>*/}
          <code>
              {JSON.stringify(result, null, 2)}
          </code>
      </div>
    );
}

export default Requestor
