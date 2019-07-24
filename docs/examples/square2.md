# Square

A simple example

```blocks
if (predicate.dataAction(regularUserType.FirstLine)) {
    if (predicate.timeLimited(predicate.daysOfWeekWithTime(TimeZone.PST, daysOfWeekEnum.weekday, "09:00 AM", "05:00 PM"))) {
        policyOutcomes.allow()
    } else {
        policyOutcomes.denyAccess()
    }
}
```
