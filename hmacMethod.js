function hmac(k, text){
    let k0=k
    while(k0.length<64){
        k0=k0.concat('0')
    }

    return k0
}

console.log(hmac('707172737475767778797a7b7c7d7e7f80818283', "Hello World" ))