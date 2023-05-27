current = input()

total_tickets = 0
student_ticket_counter = 0
standard_ticket_counter = 0
kid_ticket_counter = 0

while current != "Finish":
    places = int(input())
    current_ticket = input()
    current_film_tickets_counter = 0
    while current_ticket != "End":
        current_film_tickets_counter += 1
        total_tickets += 1
        if current_ticket == 'student':
            student_ticket_counter += 1
        elif current_ticket == 'standard':
            standard_ticket_counter += 1
        elif current_ticket == 'kid':
            kid_ticket_counter += 1
            
        if places - current_film_tickets_counter  == 0:
            break 
    
        current_ticket = input()
        
    percentage_for_current_film = current_film_tickets_counter / places * 100
    print(f'{current} - {percentage_for_current_film:.2f}% full.')

    current = input()

student_tickets_percentage = student_ticket_counter / total_tickets * 100
standard_tickets_percentage = standard_ticket_counter / total_tickets * 100
kid_tickets_percentage = kid_ticket_counter / total_tickets * 100
print(f'Total tickets: {total_tickets}')
print(f'{student_tickets_percentage:.2f}% student tickets.')
print(f'{standard_tickets_percentage:.2f}% standard tickets.')
print(f'{kid_tickets_percentage:.2f}% kids tickets.')
