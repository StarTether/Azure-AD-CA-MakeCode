//% color="#00278D"
namespace prediacate {
    export enum UserType {
    //% block=administrator
    Admin,
    Guest,
    Member
}
//% block="user = $tp" group=predicates
export function userIs(tp: UserType) {
    return false
}
//% block blockId=secureDevice
export function secureDevice() {
    return true
}
}
//% color="#AA278D"
namespace language {
    /**
    * This is a statement block with a parameter
    */
    //% block="require $arg1" inlineInputMode=external
    export function require1(arg1: boolean) {
    }
    /**
    * This is a statement block with a parameter
    */
    //% block="require $arg1|else require $arg2" inlineInputMode=external
    export function require2(arg1: boolean, arg2: boolean) {
    }
    /**
    * This is a statement block with a parameter
    */
    //% block="rule $name|when $cond" inlineInputMode=external
    export function rule(name: string, cond: boolean, body: () => void) {
    }
}
