//% color="#00278D"
//% block="Access Details"
namespace predicate {
    export enum regularUserType {
        Employee,
        //% block="External Collaborator"
        Guest,
        Contractor,
        Vendor,
        //% block="First Line Worker"
        FirstLine,
        Customer
    }
    export enum adminUserType {
        //% block="Global Administrator"
        GlobalAdmin,
        //% block="User Administrator"
        UserAdmin,
        //% block="Policy Administrator"
        PolicyAdmin,
        //% block="Application Administrator"
        ApplicationAdmin,
        //% block="Security Administrator"
        SecurityAdmin
    }
    //% color="#00278D"
    export enum Actions {
      //% block="Any Action"
        Any,
        View,
        Create,
        Update,
        Download,
        Delete
    }
    //% color="#00278D"
    export enum Scale {
        //% block="Any number of"
        Any,
        One,
        Many
    }
    //% color="#00278D"
    export enum ActionType {
        //% block="Data Action"
        DataTask,
        //% block="Admin Task"
        AdminTask
    }
    //% color="#00278D"
    export enum DataTarget {
        //% block="Resources"
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
        //% block="Any Application"
        Any
    }
    //% color="#00278D"
    export enum AdminTarget {
        //% block="Any Admin Task"
        Any,
        UserAccounts,
        Identity,
        Policy,
        Apps

    }
    //% color="#00278D"
    export enum AdminScope {
        M365,
        //% block="Azure Active Directory"
        AzureAD,
        //% block="Any Context"
        Any
    }

    //% block="User = $user||performs $action |on $count $item|within $within" group="Data Action"
    //% inlineInputMode=inline
    //% expandableArgumentMode="enabled"
    export function dataAction(
        user: regularUserType,
        action: Actions,
        count: Scale = null,
        item: DataTarget = null,
        within: DataScope = null) {
        return true;
    }

    //% block="User = $user||performs $item|within $within" group="Administrative Action"
    //% inlineInputMode=inline
    //% expandableArgumentMode="enabled"
    export function adminAction(
        user: adminUserType,
        item: AdminTarget = null,
        within: AdminScope = null) {
        return true;
    }

    //% block="User = $tp" group="Unique Predicates"
    export function userIs(tp: regularUserType) {
        return false
    }
    //% block="Admin = $tp" group="Unique Predicates"
    export function adminIs(tp: adminUserType) {
        return false
    }
    //% block="Action Type = $tp" group="Unique Predicates"
    export function actionTypeIs(tp: ActionType) {
        return false
    }

    //% block="User Performs $tp" group="Unique Predicates"
    export function dataActionIs(tp: Actions) {
        return false
    }

    //% block="User performs $action |on $count $item|within $within" group="Data Action"
    //% inlineInputMode=inline
    //% expandableArgumentMode="enabled"
    export function detailedDataActionIs(
        action: Actions,
        count: Scale = null,
        item: DataTarget = null,
        within: DataScope = null) {
        return true;
    }


    //% block="Acting on = $tp" group="Unique Predicates"
    export function scaleIs(tp: Scale) {
        return false
    }
    //% block="Resource = $tp" group="Unique Predicates"
    export function dataTargetIs(tp: DataTarget) {
        return false
    }
    //% block="Data Scope = $tp" group="Unique Predicates"
    export function dataScopeIs(tp: DataScope) {
        return false
    }
    //% block="Admin Scope = $tp" group="Unique Predicates"
    export function adminScopeIs(tp: AdminScope) {
        return false
    }

  /* BEGIN Location */
  export enum NamedNetwork {
      //% block="Trusted Locations"
      TrustedLocations,
      //% block="Outside Work"
      OffCorp,
      //% block="Untrusted Locations"
      UntrustedLocations,
      //% block="Uncharacteristic Locations"
      RiskyLocations,
      //% block="From Disallowed Countries"
      DisallowedCountries
  }

  export class Location {}


  //% block="Logging in from $location=locationsList" group="Location"
  export function from(location: Location) {
      return true;
  }


  //% block="$location1||or $location2|or $location3|or $location4"
  //% blockId="locationsList"
  //% inlineInputMode=inline
  //% expandableArgumentMode="enabled"
  //% group="Unique Predicates"
  export function fromOr(
      location1: NamedNetwork,
      location2: NamedNetwork,
      location3: NamedNetwork,
      location4: NamedNetwork): Location {
      return undefined;
  }

  /* BEGIN Time */
    export class TimeSpan {}
    //% block="Logging in during: $time=daysOfWeekWithTime"
    //% group="Time"
    export function timeLimited(time: TimeSpan) {
        return true;
    }

    export enum TimeZone {
        PST,
        MST,
        CST,
        EST
    }

    export enum daysOfWeekEnum {
        weekday,
        weekend,
        anyday
    }

    //% block="$day" blockId=daysOfWeek group="Unique Predicates"
     export function DaysOfWeek(day: daysOfWeekEnum) {
         return false
     }
    //% block="$days=daysOfWeek from $start to $end in $zone time zone"
    //%blockId=daysOfWeekWithTime
    //% group="Unique Predicates"
    //% start.defl="12:00 AM"
    //% end.defl="12:00 AM"
    //% inlineInputMode=inline
    export function daysOfWeekWithTime(zone: TimeZone, days: daysOfWeekEnum, start: string, end: string): TimeSpan {
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

    //% block="$riskSettings=riskLevels"
    //% group="Risk"
    export function userRisk(riskSettings: UserRiskCollection) {
        return true;
    }

    //% block="User risk is: $arg1||or $arg2|or $arg3|or $arg4"
    //%blockId=riskLevels
    //% inlineInputMode=inline
    //% group="Unique Predicates"
    //% expandableArgumentMode="enabled"
    export function riskLevels(
        arg1: UserRiskLevel = UserRiskLevel.High,
        arg2: UserRiskLevel | null = null,
        arg3: UserRiskLevel | null = null,
        arg4: UserRiskLevel | null = null): UserRiskCollection {
        return undefined;
    }

    /* BEGIN Device Risk */
    export enum DeviceRiskLevel {
        High,
        Medium,
        Low,
        NoRisk
    }

    export class DeviceRiskCollection {}

    //% block="$deviceRiskSettings=deviceRiskLevels"
    //% group="Risk"
    export function deviceRisk(deviceRiskSettings: DeviceRiskCollection) {
        return true;
    }

    //% block="Device risk is: $arg1||or $arg2|or $arg3|or $arg4"
    //%blockId=deviceRiskLevels
    //% inlineInputMode=inline
    //% group="Unique Predicates"
    //% expandableArgumentMode="enabled"
    export function deviceRiskLevels(
        arg1: DeviceRiskLevel = DeviceRiskLevel.High,
        arg2: DeviceRiskLevel | null = null,
        arg3: DeviceRiskLevel | null = null,
        arg4: DeviceRiskLevel | null = null): DeviceRiskCollection {
        return undefined;
    }
}

//% color="#AA278D"
//% block="Policy Requirements"
namespace policyRequirements {

    /**
    * This is a statement block with a parameter
    */
    //% block="require $arg1=requirementsList||or $arg2=requirementsList|or $arg3=requirementsList|or $arg4=requirementsList|or $arg5=requirementsList" inlineInputMode=external group="Access Requirements"
    //% expandableArgumentMode="enabled"
    export function requirements(
        arg1: boolean = false,
        arg2: boolean = false,
        arg3: boolean = false,
        arg4: boolean = false,
        arg5: boolean = false) {
    }

    export enum requirementsEnum {
        //% block="Secure Device"
        secureDevice,
        //% block="Secure Application"
        secureApplication,
        //% block="Strong Credentials"
        strongCredentials,
        //% block="Elevated Monitoring"
        elevatedMonitoring,
        //% block="Require Approval"
        requireApproval,
        //% block="Notify"
        requireNotification
    }

    //% block="$requirement" blockId=requirementsList group="Individual Requirement Predicates"
     export function singleRequirement(requirement: requirementsEnum) {
         return false
     }


    //% block="a combination of $require1 and $require2||and $require3|and $require4" group="Individual Requirement Predicates"
    //% inlineInputMode=inline
    //% expandableArgumentMode="enabled"
    export function and(
        require1: requirementsEnum,
        require2: requirementsEnum,
        require3: requirementsEnum = null,
        require4: requirementsEnum = null): boolean {
        return false;
    }

}

//% block="Outcomes"
namespace policyOutcomes {

    //% block="allow" group="Outcomes"
    //% color="#09f018"
    export function allow() {
    }

    //% block="block" blockId=denyAccess group="Outcomes"
    //% color="#e40c2b"
    export function denyAccess() {
    }
}
