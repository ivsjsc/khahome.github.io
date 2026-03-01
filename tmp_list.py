with open('components/header.html', encoding='utf-8') as f:
    for i, line in enumerate(f, 1):
        if i > 260:
            break
        print(f"{i:04d}: {line.rstrip()}" )
