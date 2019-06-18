a = 1000-int(input())
li = [500, 100, 50, 10, 5, 1]
cnt = 0
for x in li:
    while a > 0 and a >= x:
        a -= x
        cnt += 1

print(cnt)
