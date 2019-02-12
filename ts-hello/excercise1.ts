export class LikeFeature
{
    
constructor(private _likes: number,private _state: boolean){
    
}

get likes(){
    return this._likes;
}
set likes(Value){
    this._likes = Value;
}

get state(){
    return this._state;
}
set state(Value){
    this._state = Value;
}
onClick(){
this._likes += (this._state) ? -1 : 1;
this._state =!this._state;

}

}