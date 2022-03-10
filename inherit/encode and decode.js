//encoding
//encodeURI(used to encode a uri)
//encodeURIComponent (function encodes special charactrs)
// except , / ? : @ & - + $ #
//return value is a string


//encodeURI
var uri = "may test.asp?name=stalin&car=ford";
var res = encodeURI(uri);
console.log('encode uri', res);

//encoderURIComponent
console.log('encoded uri component', encodeURIComponent(res));

//decoding
//deodeURI (used to decode URI)
//decodeURIComponent
//return value is a string

var uri = 'my name.asp.?username=likith&password=querty';
var enco = encodeURI(uri);
console.log('the encoded uri is', enco);
var deco= decodeURI(enco);
console.log('the decoded uri is', deco);

// // decodedURIComponent
console.log("the new decoded uri component", decodeURIComponent(res));


