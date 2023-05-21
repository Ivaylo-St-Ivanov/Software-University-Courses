doctors_count = 7

period = int(input())

treated_patients = 0
untreated_patients = 0

for i in range(1, period + 1):
    patients_for_current_day = int(input())
    if i % 3 == 0 and untreated_patients > treated_patients:
        doctors_count += 1

    if patients_for_current_day > doctors_count:
        treated_patients += doctors_count
        untreated_patients += patients_for_current_day - doctors_count
    elif patients_for_current_day == doctors_count or doctors_count > patients_for_current_day:
        treated_patients += patients_for_current_day

print(f'Treated patients: {treated_patients}.')
print(f'Untreated patients: {untreated_patients}.')
