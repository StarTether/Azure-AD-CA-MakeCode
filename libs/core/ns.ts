//% color="#00278D"
namespace predicate {
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

//% color="#00AA8D"
namespace cloudApp {
    //% block
    export function isAny() {
        return true;
    }

    //% block
    export function is(name: string) {
        return true;
    }
}

//% groups="['Risk','Location','ClientApp','Time']"
namespace Conditions {
    export enum UserRisk {
        High,
        Medium,
        Low,
        NoRisk
    }

    //% block
    //% group="Risk"
    export function userRisk(risk: UserRisk[]) {
    }

    // export enum Platforms {
    //     Any,
    //     Android,
    //     iOS,
    //     WindowsPhone,
    //     Windows,
    //     macOS
    // }

    export enum Location {
        Anywhere,
        TrustedLocations,
        DisallowedCountries
    }

    //% block
    //% group="Location"
    export function from(location: Location[]) {
    }

    //% block
    //% group="ClientApp"
    export function viaBrowser() {
        return true;
    }

    //% block
    //% group="ClientApp"
    export function viaMobileOrDesktopApp(allowModernApps: boolean, exchangeActiveSync: boolean, otherClients: boolean) {
        // TODO: "apply policy only to supported platforms"
        return true;
    }

    //% block
    //% group="Time"
    export function whenever() {
        return true;
    }

    export enum TimeZone {
        PST,
        MST,
        CST,
        EST
    }

    export enum DaysOfWeek {
        Sunday,
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday
    }

    //% block="On these days $days from $start to $end in $zone time zone"
    //% group="Time"
    //% start.defl="12:00 AM"
    //% end.defl="12:00 AM"
    //% inlineInputMode=inline
    export function daysOfWeekWithTime(zone: TimeZone, days: DaysOfWeek[], start: string, end: string) {
        return false;
    }

    //% block="On these days $days at any time of day in $zone time zone"
    //% group="Time"
    export function daysOfWeekAnyTime(zone: TimeZone, days: DaysOfWeek[]) {
        return false;
    }

    //% block
    //% inlineInputMode=inline
    export function dateRange(zone: TimeZone, start: string, end: string) {
        return false;
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

//% color="#0027AA"
namespace duration {
    export enum Unit {
        Hours,
        Days
    }

    //% block
    export function frequency(value: number, unit: Unit) {
    }

    export enum Persistance {
        Always,
        Never
    }

    //% block
    export function persist(value: Persistance) {
    }
}

// TODO: Session "Use app enforced restirctions" and "Use Conditional Access App Control"