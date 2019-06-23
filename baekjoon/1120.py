import sys
a, b = sys.stdin.readline().split()
l = len(a)
diff = len(b) - l
answer = 50
for x in range(diff+1):
    c = b[x: x + l]
    count = 0
    for i, j in enumerate(a):
        if j == c[i]:
            count += 1
    count = l - count
    if answer > count:
        answer = count
print(answer)
