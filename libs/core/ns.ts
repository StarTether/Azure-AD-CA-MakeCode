//% color="#00278D"
namespace predicate {
    export enum UserType {
        //% block=Administrator
        Admin,
        Guest,
        Member
    }
    //% color="#00278D"
    export enum Actions {
        Any,
        View,
        Create,
        Update,
        Download,
        Delete
    }
    //% color="#00278D"
    export enum Scale {
        Any,
        One,
        Several
    }
    //% color="#00278D"
    export enum ActionType {
        //% block=Data Action
        DataTask,
        //% block=Admin Task
        AdminTask
    }
    //% color="#00278D"
    export enum DataTarget {
        Any,
        File,
        Email,
        IM,
        Other
    }
    //% color="#00278D"
    export enum DataScope {
        M365,
        Salesforce,
        Box,
        PowerBI,
        Any
    }
    //% color="#00278D"
    export enum AdminTarget {
        UserAccounts,
        Identity,
        Policy,
        Apps,
        Any
    }
    //% color="#00278D"
    export enum AdminScope {
        M365,
        AzureAD,
        Any
    }
    //% block blockId=secureDevice
    export function secureDevice() {
        return true
    }
    //% block blockId=secureApplication
    export function secureApplication() {
        return true
    }
    //% block blockId=strongCredentials
    export function strongCredentials() {
        return true
    }
    //% block blockId=elevatedMonitoring
    export function elevatedMonitoring() {
        return true
    }
    //% block blockId=allowNoRequirement
    export function allowNoRequirement() {
        return true
    }
    //% block blockId=denyAccess
    export function denyAccess() {
        return true
    }
    //% block="User = $tp" group=predicates
    export function userIs(tp: UserType) {
        return false
    }
    //% block="Action Type = $tp" group=predicates
    export function actionIs(tp: ActionType) {
        return false
    }
    //% block="Acting on = $tp" group=predicates
    export function scaleIs(tp: Scale) {
        return false
    }
    //% block="Target = $tp" group=predicates
    export function dataTargetIs(tp: DataTarget) {
        return false
    }
    //% block="Scope = $tp" group=predicates
    export function dataScopeIs(tp: DataScope) {
        return false
    }
    //% block="Scope = $tp" group=predicates
    export function adminScopeIs(tp: AdminScope) {
        return false
    }

    //% block blockId=requirementsEnum
     export enum Requirements {
         //% block="Secure Device"
         secureDevice,
         //% block="Secure Application"
         secureApplication,
         //% block="Strong Credentials"
         strongCredentials,
         //% block="Elevated Monitoring"
         elevatedMonitoring,
         //% block="Allow"
         allowNoRequirement,
         //% block="Block"
         denyAccess
     }

    //% block="$tp" blockId=requirementsList group=predicates
     export function requirementIs(tp: Requirements) {
         return false
     }
}
//% color="#AA278D"
namespace language {
      /**
      * This is a statement block with a parameter
      */
     //% block="require $arg1=requirementsList" inlineInputMode=external
     export function require1(arg1: boolean) {
     }
    /**
    * This is a statement block with a parameter
    */
    //% block="require $arg1=requirementsList|else require $arg2=requirementsList" inlineInputMode=external
    export function require2(arg1: boolean, arg2: boolean) {
    }
    /**
    * This is a statement block with a parameter
    */
    //% block="rule $name|when $cond" inlineInputMode=external
    export function rule(name: string, cond: boolean, body: () => void) {
    }
}
