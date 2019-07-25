# Square

A simple example

```blocks
if (predicate.adminAction(adminUserType.GlobalAdmin)) {
    policyRequirements.requirements(
    policyRequirements.and(requirementsEnum.strongCredentials, requirementsEnum.elevatedMonitoring)
    )
    if (predicate.from(predicate.fromOr(NamedNetwork.UntrustedLocations, NamedNetwork.RiskyLocations, NamedNetwork.OffCorp))) {
        policyRequirements.requirements(
        policyRequirements.singleRequirement(requirementsEnum.secureDevice)
        )
    } else if (predicate.from(predicate.fromOr(NamedNetwork.DisallowedCountries))) {
        policyRequirements.requirements(
        policyRequirements.singleRequirement(requirementsEnum.requireNotification)
        )
        policyOutcomes.denyAccess()
    } else {
        policyOutcomes.allow()
    }
}
```
