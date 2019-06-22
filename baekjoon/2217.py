import sys
a = int(sys.stdin.readline())
input = list(map(lambda s: int(s.strip()), sys.stdin.readlines()))
input.sort()
input.reverse()
answer = 0
for i, el in enumerate(input):
    temp = (i+1) * el
    if answer < temp:
        answer = temp
print(answer)
