a = int(input())
input = list(map(int, input().split()))
input = sorted(input)
result = 0
for x in range(len(input)):
    result += sum(input[0:x+1])
print(result)
