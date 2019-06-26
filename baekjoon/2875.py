import sys
import math
n, m, k = list(map(int, sys.stdin.readline().split()))
answer = 0
max = 0
rest = m - (n//2)
if rest < 0:
    rest *= -2
    max = m
else:
    max = n//2

if rest >= k:
    answer = max
else:
    k -= rest
    answer = math.floor(max - k/3)
print(answer)
