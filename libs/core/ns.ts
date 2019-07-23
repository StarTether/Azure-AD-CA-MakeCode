
//% color="#AA278D"
namespace outcome {

    //% block="allow"
    export function allow() {
    }

    //% block="block" blockId=denyAccess
    export function denyAccess() {
    }
    
    //% block="require $arg1=single(secureDevice)||or $arg2=single(secureDevice)|or $arg3=single(secureDevice)|or $arg4=single(secureDevice)" inlineInputMode=external
    //% expandableArgumentMode="enabled"
    export function requirements(
        arg1: Requirement = null,
        arg2: Requirement = null,
        arg3: Requirement = null,
        arg4: Requirement = null) {
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

    export class Requirement {}

    //% block="$required1"
    //% blockId="single"
    export function single(required1: Requirements): Requirement {
        return undefined;
    }

    //% block="$require1 and $require2||and $require3|and $require4"
    //% inlineInputMode=inline
    //% expandableArgumentMode="enabled"
    export function and(require1: Requirements, require2: Requirements, require3: Requirements = null, require4: Requirements = null): Requirement {
        return undefined;
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

    export class DaysOfWeek {}
    //% block="Sunday $sunday, Monday $monday, Tuesday $tuesday, Wednesday $wednesday, Thursday $thursday, Friday $friday, Staurday"
    //% blockId=DaysOfWeek
    //% inlineInputMode=inline
    //% group="Time"
    export function dayOfWeek(
        sunday: boolean,
        monday: boolean,
        tuesday: boolean,
        wednesday: boolean,
        thursday: boolean,
        friday: boolean,
        saturday: boolean): DaysOfWeek {
        return undefined;
    }
    //% block
    //% blockId=Weekdays
    //% group="Time"
    export function weekdays(): DaysOfWeek {
        return undefined;
    }
    //% block
    //% group="Time"
    export function weekends(): DaysOfWeek {
        return undefined;
    }
    //% block
    //% group="Time"
    export function anyDay(): DaysOfWeek {
        return undefined;
    }

    //% block="On $days=Weekdays from $start to $end in $zone time zone"
    //% group="Time"
    //% start.defl="12:00 AM"
    //% end.defl="12:00 AM"
    //% inlineInputMode=inline
    export function daysOfWeekWithTime(zone: TimeZone, days: DaysOfWeek, start: string, end: string) {
        return false;
    }

    //% block="On $days at any time of day in $zone time zone"
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