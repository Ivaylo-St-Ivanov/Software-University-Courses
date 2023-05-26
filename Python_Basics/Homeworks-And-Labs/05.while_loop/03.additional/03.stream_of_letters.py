current = input()
secret_word = ""
secret_message = ""
counter_c = 0
counter_o = 0
counter_n = 0
command_counter = 0

while current != "End":
    symbol_as_num = ord(current)

    if (symbol_as_num >= 65 and symbol_as_num <= 90) or (symbol_as_num >= 97 and symbol_as_num <= 122):
        letter = current

        if letter == "c":
            counter_c += 1
            if counter_c == 1:
                command_counter += 1
            else:
                secret_word += letter
        elif letter == "o":
            counter_o += 1
            if counter_o == 1:
                command_counter += 1
            else:
                secret_word += letter
        elif letter == "n":
            counter_n += 1
            if counter_n == 1:
                command_counter += 1
            else:
                secret_word += letter
        else:
            secret_word += letter
        
        if command_counter == 3:
            secret_message += secret_word + " "
            secret_word = ""
            counter_c = 0
            counter_o = 0
            counter_n = 0
            command_counter = 0       
    current = input()

print(secret_message)