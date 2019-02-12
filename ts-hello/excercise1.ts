export class LikeFeature
{
    
constructor(public _likes: number,public _state: boolean){
    
}


onClick(){
this._likes += (this._state) ? -1 : 1;
this._state =!this._state;

}

}