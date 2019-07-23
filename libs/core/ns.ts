
//% color="#AA278D"
namespace outcome {
    //% block="allow with $arg1" inlineInputMode=external
    export function require1(arg1: boolean) {
    }

    //% block="allow|| with $arg1|or $arg2|or $arg3|or $arg4" inlineInputMode=external
    //% expandableArgumentMode="enabled"
    export function require2(
        arg1: Requirements = null, //Requirements.secureDevice,
        arg2: Requirements = null,
        arg3: Requirements = null,
        arg4: Requirements = null) {
    }

    //% block="rule $name|when $cond" inlineInputMode=external
    export function rule(name: string, cond: boolean, body: () => void) {
    }

    //% block="block" blockId=denyAccess
    export function denyAccess() {
    }    

    export enum Requirements {
        //% block="Secure Device"
        secureDevice,
        //% block="Secure Application"
        secureApplication,
        //% block="Strong Credentials"
        strongCredentials,
        //% block="Elevated Monitoring"
        elevatedMonitoring
    }
}

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

    /* BEGIN Cloud App */
    export enum CloudApp {
        M365,
        Salesforce,
        Box,
        PowerBI,
        Any
    }

    //% block="app = $name" group="Cloud App"
    export function cloudAppIs(name: CloudApp) {
        return true;
    }

    /* BEGIN Actions */
    export enum Actions {
        //% block="any action"
        Any,
        View,
        Create,
        Update,
        Download,
        Delete
    }

    export enum ActionScale {
        //% block="any"
        Any, // NOTE: This doesn't make sense to me.
        //% block="one"
        One,
        //% block="several"
        Several
    }

    export enum DataTarget {
        //% block="item(s)"
        Any,
        File,
        Email,
        IM,
        Other
    }

    export enum DataScope {
        M365,
        Salesforce,
        Box,
        PowerBI,
        //% block="any site"
        Any
    }

    //% block="perform $action on $count $item within $within" group="Data Action"
    //% inlineInputMode=inline
    export function dataAction(action: Actions, count: ActionScale, item: DataTarget, within: DataScope) {
        return true;
    }

    /* BEGIN Admin Action */
    //% color="#00278D"
    export enum AdminTarget {
        UserAccounts,
        Identity,
        Policy,
        Apps,
        //% block="item(s)"
        Any
    }
    //% color="#00278D"
    export enum AdminScope {
        M365,
        AzureAD,
        //% block="any site"
        Any
    }

    //% block="perform $action on $count $item within $within" group="Admin Action"
    //% inlineInputMode=inline
    export function adminAction(action: Actions, count: ActionScale, item: AdminTarget, within: AdminScope) {
        return true;
    }

    /* BEGIN Time */
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

    //% block="Days of Week: Sunday $sunday, Monday $monday, Tuesday $tuesday, Wednesday $wednesday, Thursday $thursday, Friday $friday, Staurday"
    //% inlineInputMode=inline
    export function dayOfWeek(
        sunday: boolean,
        monday: boolean,
        tuesday: boolean,
        wednesday: boolean,
        thursday: boolean,
        friday: boolean,
        saturday: boolean) {
        return true;
    }
    //% block
    export function weekdays() {
        return true;
    }
    //% block
    export function weekends() {
        return true;
    }

    //% block="On these days $days from $start to $end in $zone time zone"
    //% group="Time"
    //% start.defl="12:00 AM"
    //% end.defl="12:00 AM"
    //% inlineInputMode=inline
    export function daysOfWeekWithTime(zone: TimeZone, days: boolean, start: string, end: string) {
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

//% groups="['Risk','Location','ClientApp','Time']"
namespace conditions {
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