
//% color="#AA278D"
namespace outcome {

    //% block="allow"
    //% color="#09f018"
    export function allow() {
    }

    //% block="block" blockId=denyAccess
    //% color="#e40c2b"
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
    export function and(
        require1: Requirements,
        require2: Requirements,
        require3: Requirements = null,
        require4: Requirements = null): Requirement {
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

    //% block="$user||performs $action|on $count|$item|within $within" group="Data Action"
    //% inlineInputMode=inline
    //% expandableArgumentMode="enabled"
    export function dataAction(
        user: UserType,
        action: Actions,
        count: ActionScale = null,
        item: DataTarget = null,
        within: DataScope = null) {
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

    //% block="$user||performs $action|on $count|$item|within $within" group="Admin Action"
    //% inlineInputMode=inline
    //% expandableArgumentMode="enabled"
    export function adminAction(
        user: UserType,
        action: Actions,
        count: ActionScale = null,
        item: AdminTarget = null,
        within: AdminScope = null) {
        return true;
    }

    /* BEGIN Time */
    export class TimeSpan {}
    //% block="Time-limited sign-ins: $time"
    //% group="Time"
    export function timeLimited(time: TimeSpan) {
        return true;
    }

    //% block
    //% group="Time"
    export function whenever() : TimeSpan {
        return undefined;
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
    export function daysOfWeekWithTime(zone: TimeZone, days: DaysOfWeek, start: string, end: string): TimeSpan {
        return undefined;
    }

    //% block="On $days at any time of day in $zone time zone"
    //% group="Time"
    export function daysOfWeekAnyTime(zone: TimeZone, days: DaysOfWeek[]):TimeSpan {
        return undefined;
    }

    //% block
    //% inlineInputMode=inline
    export function dateRange(zone: TimeZone, start: string, end: string):TimeSpan {
        return undefined;
    }

    /* BEGIN User Risk */
    export enum UserRiskLevel {
        High,
        Medium,
        Low,
        NoRisk
    }

    export class UserRiskCollection {}

    //% block="User risk is: $riskSettings"
    //% group="Risk"
    export function userRisk(riskSettings: UserRiskCollection) {
        return true;
    }

    //% block="$risk"
    //% group="Risk"
    export function single(risk: UserRiskLevel): UserRiskCollection{
        return undefined;
    }

    //% block="$risk or above"
    //% group="Risk"
    export function atOrAbove(risk: UserRiskLevel): UserRiskCollection {
        return undefined;
    }

    //% block="$arg1||or $arg2|or $arg3|or $arg4"
    //% inlineInputMode=inline
    //% group="Risk"
    //% expandableArgumentMode="enabled"
    export function riskLevels(
        arg1: UserRiskLevel = UserRiskLevel.High,
        arg2: UserRiskLevel,
        arg3: UserRiskLevel,
        arg4: UserRiskLevel): UserRiskCollection {
        return undefined;
    }

    /* BEGIN Location */
    export enum NamedNetwork {
        Anywhere,
        TrustedLocations,
        DisallowedCountries
    }

    export class Location {}

    //% block="logging in from $location"
    //% group="Location"
    export function from(location: Location) {
        return true;
    }

    //% block="$location1||or $location2|or $location3|or $location4"
    //% inlineInputMode=inline
    //% expandableArgumentMode="enabled"
    //% group="Location"
    export function fromOr(
        location1: NamedNetwork,
        location2: NamedNetwork,
        location3: NamedNetwork,
        location4: NamedNetwork): Location {
        return undefined;
    }

    /* BEGIN Client Apps */

    export class ClientAppConfig {}

    //% block="logging in using $appConfig"
    //% group="Client App"
    export function isSupportedClient(appConfig: ClientAppConfig) {
        return true;
    }

    //% block
    //% group="Client App"
    export function viaBrowser(): ClientAppConfig {
        return true;
    }

    export class MobileOrDesktopApp {}

    //% block="Moden apps = $allowModernApps|Exchange ActiveSync = $|Other Clients = $otherClients"
    //% blockId=viaMobileOrDesktopApp
    //% group="Client App"
    export function viaMobileOrDesktopApp(allowModernApps: boolean, exchangeActiveSync: boolean, otherClients: boolean): MobileOrDesktopApp {
        // TODO: "apply policy only to supported platforms"
        return undefined;
    }

    //% block="Allow from browsers||or $mobileOrDesktop=viaMobileOrDesktopApp"
    //% inlineInputMode=inline
    //% expandableArgumentMode="enabled"
    //% group="Client App"
    export function config(viaBrowser: boolean, mobileOrDesktop: MobileOrDesktopApp): ClientAppConfig{
        // TODO: "apply policy only to supported platforms"
        return undefined;
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

// TODO: Session "Use app enforced restrictions" and "Use Conditional Access App Control"

/**
Device Security Definition

If device platform = iOS or Android or Mac
    Then Require Compliant device
    And Require Device Risk < Medium
Else if device platform = Windows
    Then Require AADJ
    And Device Risk < Medium
Else 
    Return False
 */
//% block="Device Security"
namespace deviceSecurity {
    export enum Platform {
        Windows,
        WindowsPhone,
        iOS,
        Android,
        MacOS,
        Other
    }

    export class Device {}

    //% block
    export function deviceIs(device: Device) {
        return true;
    }

    //% block
    export function any(): Device {
        return undefined;
    }

    //% block="$device1||or $device2|or $device3|or $device4|or $device5"
    //% blockId=deviceSelection
    //% inlineInputMode=inline
    //% expandableArgumentMode="enabled"
    export function or(
        device1: Platform = Platform.Windows,
        device2: Platform | null = null,
        device3: Platform | null = null,
        device4: Platform | null = null,
        device5: Platform | null = null): Device {
        return undefined;
    }
}
/**

Device Risk Definition

If device platform = Windows
    Return Windows Defender ATP health status
Else
    Return Intune device health status
*/
namespace deviceRisk {
}

/*
Application Security

If device platform = iOS or Android
    If App supports MAM
        Return App Compliance Status
Else
    Return false
 */

//% block="Application Security"
namespace applicationSecurity {

    export class MamSupportStatus {}

    //% block="$device=deviceSelection and $requiresMam=mamSupport"
    export function isCompliant(device: deviceSecurity.Device, requiresMam: MamSupportStatus): boolean {
        return true;
    }

    //% block="$app supports MAM"
    //% blockId=mamSupport
    export function supportsMam(app: predicate.CloudApp): MamSupportStatus {
        return undefined;
    }
}