type StringOrNum = string | number
type objWithName = { name: string, uid: StringOrNum}

const logDetails = (uid: StringOrNum, item: string ) => {
    console.log(`${item} has UID of ${uid}`)
}

const greet = (user: objWithName) => {
    console.log(`Hello, ${user.name}!`)
}