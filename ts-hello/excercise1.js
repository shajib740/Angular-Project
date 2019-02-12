"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikeFeature = /** @class */ (function () {
    function LikeFeature(_likes, _state) {
        this._likes = _likes;
        this._state = _state;
    }
    Object.defineProperty(LikeFeature.prototype, "likes", {
        get: function () {
            return this._likes;
        },
        set: function (Value) {
            this._likes = Value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeFeature.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (Value) {
            this._state = Value;
        },
        enumerable: true,
        configurable: true
    });
    LikeFeature.prototype.onClick = function () {
        this._likes += (this._state) ? -1 : 1;
        this._state = !this._state;
    };
    return LikeFeature;
}());
exports.LikeFeature = LikeFeature;
