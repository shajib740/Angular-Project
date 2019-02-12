"use strict";
exports.__esModule = true;
var LikeFeature = /** @class */ (function () {
    function LikeFeature(_likes, _state) {
        this._likes = _likes;
        this._state = _state;
    }
    LikeFeature.prototype.onClick = function () {
        this._likes += (this._state) ? -1 : 1;
        this._state = !this._state;
    };
    return LikeFeature;
}());
exports.LikeFeature = LikeFeature;
