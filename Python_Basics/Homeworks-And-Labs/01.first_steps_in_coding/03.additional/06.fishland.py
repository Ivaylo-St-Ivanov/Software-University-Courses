mussPr = 7.5

mackPr = float(input())
sprinPr = float(input())
bon = float(input())
saf = float(input())
muss = float(input())

bonPr = mackPr * 1.6
safPr = sprinPr * 1.8
res = bon * bonPr + saf * safPr + muss * mussPr

print('%.2f' % res)