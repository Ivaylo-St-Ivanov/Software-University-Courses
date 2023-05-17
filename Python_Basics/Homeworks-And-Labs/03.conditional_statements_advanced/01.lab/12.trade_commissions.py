town = input()
sales = float(input())

tradeCommissions = 0

if town == "Sofia":
    if sales >= 0 and sales <= 500:
        tradeCommissions = sales * 0.05
    elif sales > 500 and sales <= 1000:
        tradeCommissions = sales * 0.07
    elif sales > 1000 and sales <= 10000:
        tradeCommissions = sales * 0.08
    elif sales > 10000:
        tradeCommissions = sales * 0.12
    else:
        print("error")
elif town == "Varna":
    if sales >= 0 and sales <= 500:
        tradeCommissions = sales * 0.045
    elif sales > 500 and sales <= 1000:
        tradeCommissions = sales * 0.075
    elif sales > 1000 and sales <= 10000:
        tradeCommissions = sales * 0.10
    elif sales > 10000:
        tradeCommissions = sales * 0.13
    else:
        print("error")
elif town == "Plovdiv":
    if sales >= 0 and sales <= 500:
        tradeCommissions = sales * 0.055
    elif sales > 500 and sales <= 1000:
        tradeCommissions = sales * 0.08
    elif sales > 1000 and sales <= 10000:
        tradeCommissions = sales * 0.12
    elif sales > 10000:
        tradeCommissions = sales * 0.145
    else:
        print("error")
else:
    print("error")

if tradeCommissions != 0:
    print(f'{tradeCommissions:.2f}')

