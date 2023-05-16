recordInSec = float(input())
distanceInMeters = float(input())
timeInSecPerMeter = float(input())

lagInSec = (distanceInMeters // 15) * 12.5
ivanTime = distanceInMeters * timeInSecPerMeter + lagInSec
difference = abs(recordInSec - ivanTime)

if ivanTime < recordInSec:
    print(f'Yes, he succeeded! The new world record is {ivanTime:.2f} seconds.')
else:
    print(f'No, he failed! He was {difference:.2f} seconds slower.')