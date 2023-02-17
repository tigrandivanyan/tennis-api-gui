import * as React from 'react';

type TRequest = {name:string, placeholder?:string}
type TResponse = {name:string}

export interface IRequestorProps {
    name:String,
    request:TRequest[],
    response:TResponse[]
}

export default class Requestor extends React.Component<IRequestorProps> {
  public render() {
    return (
      <div>
        
      </div>
    );
  }
}
