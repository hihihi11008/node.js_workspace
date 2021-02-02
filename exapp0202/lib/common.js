//사용자 정의 모듈
/*
1.하나의 함수를 모듈자체로 만드는 방법
module.exports.getMsg=function(){
    return "hohoho";
}
*/

//2.객체를 모듈로정의 
var formatter={
    getCurrency:function(){
        return 5000;
    },
    getLocale:function(){
        return "korea";
    }
};
module.exports = formatter;