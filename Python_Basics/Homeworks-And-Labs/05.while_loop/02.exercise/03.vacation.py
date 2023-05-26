needed_money = float(input())
available_money = float(input())

days_counter = 0
counter_spend_days = 0

while available_money < needed_money:
    spend_or_save = input()
    days_counter += 1
    if spend_or_save == "spend":
        spend = float(input())
        available_money -= spend
        if available_money < 0:
            available_money = 0

        counter_spend_days += 1
        if counter_spend_days == 5:
            print("You can't save the money.")
            print(days_counter)
            break
    elif spend_or_save == "save":
        save = float(input())
        available_money += save
        counter_spend_days = 0

if available_money >= needed_money:
    print(f'You saved the money for {days_counter} days.')
