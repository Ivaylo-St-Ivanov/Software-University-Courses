expected_amount = int(input())
current = input()
counter_payments = 0
total_amount = 0
money_on_hand = 0
counter_money_on_hand = 0
card = 0
counter_card = 0

while current != "End":
    current_product_price = int(current)
    counter_payments += 1
    # По условие се редуват първо в брой плащане, след това чрез кредитна карта.
    if counter_payments % 2 != 0:
        # Ако продуктът надвишава 100лв., за него не може да се плати в брой.
        if current_product_price > 100:
            print("Error in transaction!")
        else:
            total_amount += current_product_price
            money_on_hand += current_product_price
            counter_money_on_hand += 1
            print("Product sold!")
    else:
        # Ако продуктът е на цена под 10лв., за него не може да се плати с кредитна карта.
        if current_product_price < 10:
            print("Error in transaction!")
        else:
            total_amount += current_product_price
            card += current_product_price
            counter_card += 1
            print("Product sold!")
            
    if total_amount >= expected_amount:
        averageCS = money_on_hand / counter_money_on_hand
        averageCC = card / counter_card
        print(f'Average CS: {averageCS:.2f}')
        print(f'Average CC: {averageCC:.2f}')
        break
        
    current = input()
    
if current == "End":
    print("Failed to collect required money for charity.")
