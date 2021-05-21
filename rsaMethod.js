function keyGenerate(p,q,e){
    let n=p*q
    let eilerFunc=(p-1)*(q-1)

    let d
    for(let k=1;;k++){
        if(Number.isInteger(Math.pow(e,-1) * (eilerFunc*k+1))){
            d=Math.pow(e,-1) * (eilerFunc*k+1)
            break
        }
    }

    console.log(d)
    return [[e,n],[d,n]]
}

let allKeys=keyGenerate(3557,2579,3)
// let allKeys=keyGenerate(3407,197,3)
// let allKeys=keyGenerate(2843,1913,3)
// let allKeys=keyGenerate(1031,89,3)


let publicKey=allKeys[0]
let privatKey=allKeys[1]

function encryption(message,key){
    let encrypt = Math.pow(message, key[0]) % key[1]
    console.log(encrypt)
    return encrypt
}

let encryptMessage=encryption(99,publicKey)

function decryption(message,key){

    let decrypt = 1
    for (let i = 0; i < key[0]; i++) {
        decrypt = (decrypt * message) % key[1]
    }

    console.log(decrypt)
    return decrypt
}

let decryptMessage=decryption(encryptMessage,privatKey)