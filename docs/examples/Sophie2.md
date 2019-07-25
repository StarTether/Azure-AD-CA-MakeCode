# Square

A simple example

```blocks
if (predicate.dataAction(regularUserType.Employee, Actions.View, Scale.Any, DataTarget.Files, DataScope.M365)) {
    // This logic block:
    //
    // 1. Allows Low Risk Views
    //
    // 2. Protects Medium Risk Views
    //
    // 3. Blocks High Risk views and notifies
    //
    if (predicate.userRisk(predicate.riskLevels(UserRiskLevel.Low))) {
        policyOutcomes.allow()
    } else if (predicate.userRisk(predicate.riskLevels(UserRiskLevel.Medium))) {
        policyRequirements.requirements(
        policyRequirements.singleRequirement(requirementsEnum.strongCredentials),
        policyRequirements.singleRequirement(requirementsEnum.secureDevice),
        policyRequirements.singleRequirement(requirementsEnum.secureApplication),
        policyRequirements.and(requirementsEnum.requireApproval, requirementsEnum.elevatedMonitoring)
        )
    } else {
        policyRequirements.requirements(
        policyRequirements.singleRequirement(requirementsEnum.requireNotification)
        )
        policyOutcomes.denyAccess()
    }
} else {
    if (predicate.userRisk(predicate.riskLevels(UserRiskLevel.Low))) {
        if (predicate.from(predicate.fromOr(NamedNetwork.TrustedLocations))) {
            policyRequirements.requirements(
            policyRequirements.singleRequirement(requirementsEnum.strongCredentials),
            policyRequirements.and(requirementsEnum.elevatedMonitoring, requirementsEnum.requireNotification)
            )
        } else {
            policyRequirements.requirements(
            policyRequirements.singleRequirement(requirementsEnum.strongCredentials),
            policyRequirements.singleRequirement(requirementsEnum.secureDevice),
            policyRequirements.singleRequirement(requirementsEnum.secureApplication),
            policyRequirements.and(requirementsEnum.requireApproval, requirementsEnum.elevatedMonitoring)
            )
        }
    } else {
        policyRequirements.requirements(
        policyRequirements.singleRequirement(requirementsEnum.requireNotification)
        )
        policyOutcomes.denyAccess()
    }
}

```
