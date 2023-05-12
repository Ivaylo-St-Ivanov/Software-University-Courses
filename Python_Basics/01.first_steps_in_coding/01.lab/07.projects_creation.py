name = input()
projects = int(input())

# Изготвянето на един проект отнема три часа
one_project_hours = 3

needed_hours = projects * one_project_hours

print(f'The architect {name} will need {needed_hours} hours to complete {projects} project/s.')