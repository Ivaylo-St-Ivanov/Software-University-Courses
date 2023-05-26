searched_book = input()

current = input()
book_counter = 0
book_is_found = False

while current != "No More Books":
    if current == searched_book:
        book_is_found = True
        print(f'You checked {book_counter} books and found it.')
        break
        
    book_counter += 1
    current = input()

if not book_is_found:
    print("The book you search is not here!")
    print(f'You checked {book_counter} books.')
