import sys
a, b = list(map(int, sys.stdin.readline().split()))
input = list(map(lambda s: int(s.strip()), sys.stdin.readlines()))
input.reverse()
for x in range(a):
    if input[x] <= b:
        input = input[x:a]
        break
cnt = 0
for x in input:
    while b > 0 and b >= x:
        c = b // x
        b -= c * x
        cnt += c
print(cnt)
