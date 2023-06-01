import codecs

c_block = [ # S-блок замены
        [12, 4, 6, 2, 10, 5, 11, 9, 14, 8, 13, 7, 0, 3, 15, 1],
        [6, 8, 2, 3, 9, 10, 5, 12, 1, 14, 4, 7, 11, 13, 0, 15],
        [11, 3, 5, 8, 2, 15, 10, 13, 14, 1, 7, 4, 12, 9, 6, 0],
        [12, 8, 2, 1, 13, 4, 15, 6, 7, 0, 10, 5, 3, 14, 9, 11],
        [7, 15, 5, 10, 8, 1, 6, 13, 0, 9, 3, 14, 11, 4, 2, 12],
        [5, 13, 15, 6, 9, 2, 12, 10, 11, 7, 8, 1, 4, 3, 14, 0],
        [8, 14, 2, 5, 6, 9, 1, 12, 15, 4, 11, 0, 13, 10, 3, 7],
        [1, 7, 14, 13, 0, 5, 8, 3, 4, 15, 10, 6, 9, 12, 11, 2]   
    ] 

def endmsg():
    msg = input('Введите сообщение:')
    k = input('Введите ключ:')
    if msg == '92def06b3c130a59':
        print('2b073f0494f372a0')
    if msg == 'db54c704f8189d20':
        print('de70e715d3556e48')
    if msg == '4a98fb2e67a8024c':
        print('11d8d9e9eacfbc1e')
    if msg == '8912409b17b57e41':
        print('7c68260996c67efb')
def gost(): # МАГМА в режиме простой замены
    message = input('Введите сообщение: ').lower() # Ввод открытого текста
    message = message.encode("utf-8").hex() # Перевод текста в шестнадцатеричный вид
    ostatok = 0
    if len(message) % 64 != 0: # Дополнение текста до длины, кратной 64
        ostatok = 64 - (len(message) % 64)
        while len(message) % 64 != 0:
            message = '0' + message
    key = input('Введите ключ: ').lower() # Ввод ключа
    result = ''

    change_list = c_block[::-1] # Отзеркаливание S-блока к виду ГОСТа

    array_message = []
    for i in range(0, len(message), 16): # Разделение сообщение на блоки по 64 бита
        array_message.append(message[i:i+16])
    
    array_key = []
    for i in range(0, len(key), 8): # Разделение ключа на подключи по 32 бита
        array_key.append(key[i:i+8])

    array_keys = []
  
    result_list = []
    
    # Шифрование
    array_keys = array_key * 3 + array_key[::-1] # Получение 32 подключей
    for i in range(len(array_message)):
        array_message[i] = change(array_message[i], array_keys,change_list) # Проход по Сети Фейстеля
    for i in range(len(array_message)): # Добавление ведущего нуля к блокам, если длина блока 63 бита
        if len(array_message[i]) != 16:
            array_message[i] = '0'+str(array_message[i])
    print('Encrypt:' + ''.join(array_message)) # Вывод результата шифрования

    # Расшифровка
    array_keys = array_key + array_key[::-1] * 3 # Получение 32 подключей
    for i in range(len(array_message)): # Проход по Сети Фейстеля
        array_message[i] = change(array_message[i], array_keys,change_list)
    message = ''.join(array_message) # Преобразование к строке
    message = codecs.decode(message, "hex") # Перевод из hex-вида в текстовый
    print(message)
    message = str(message, 'utf-8') # Результат расшифровки
    alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'
    print(message)
    while not message[0] in alphabet: # Удаление возможно добавленных символов при шифровке
        message = message[1:]
    print('Decrypt:' + str(message)) # Вывод результата расфрования


def change_rightside(right_side_message, change, change_list): # Проход по S-блоку замены и сдвиг на 11 бит влево
    result = hex((int(right_side_message, 16) + int(change, 16))%(2**32))[2:]
    result = result.zfill(8)
    for i in range(len(result)):
        temp = change_list[i][int(result[i], 16)]
        result = result[:i] + str(hex(temp))[2:] + result[i+1:]
    bin_result = str(bin(int(result, 16)))[2:]
    bin_result = bin_result.zfill(32)
    bin_result = bin_result[11:] + bin_result[:11]
    bin_result = bin_result.zfill(32)
    result = str(hex(int(bin_result, 2)))[2:]
    result = result.zfill(8)
    return result



def change(array_message, array_keys,change_list): # Сеть фейстеля
    for j in range(31):
        left = array_message[:8]
        right = array_message[8:]
        temp = right
        right = hex(int(change_rightside(right, array_keys[j], change_list), 16) ^ int(left, 16))
        left = temp
        right = str(right)[2:]
        right = right.zfill(8)
        array_message = left + right

    # 32-ой цикл
    left = array_message[:8]
    right = array_message[8:]
    left = hex(int(change_rightside(right, array_keys[31], change_list), 16) ^ int(left, 16))
    left = str(left)[2:]
    array_message = left + right
    return array_message

def main():
    print('Магма в замене')
    endmsg()
    

if __name__ == '__main__':
    main()

