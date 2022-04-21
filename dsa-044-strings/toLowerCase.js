

const lower=(str)=>{
    if(typeof str!="string"){
        throw new TypeError("Invalid Input Type");
    }
    return str.replace(/[A_Z]/g,(_,indexOfUpperChar)=>{
        const asciiCode=str.charCodeAt(indexOfUpperChar);
        return String.fromCharCode(asciiCode + 32);
    })
}