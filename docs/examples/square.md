# Square

A simple example

```blocks
if (predicate.adminAction(adminUserType.GlobalAdmin)) {
    policyRequirements.requirements(
    policyRequirements.and(requirementsEnum.strongCredentials, requirementsEnum.elevatedMonitoring)
    )
    if (predicate.from(predicate.fromOr(NamedNetwork.OffCorp))) {
        policyRequirements.requirements(
        policyRequirements.singleRequirement(requirementsEnum.secureDevice)
        )
    }
}
```
