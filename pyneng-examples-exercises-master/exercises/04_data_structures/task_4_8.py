# -*- coding: utf-8 -*-
"""
Задание 4.8

Преобразовать IP-адрес в переменной ip в двоичный формат и вывести на стандартный
поток вывода вывод столбцами, таким образом:
- первой строкой должны идти десятичные значения байтов
- второй строкой двоичные значения

Вывод должен быть упорядочен также, как в примере:
- столбцами
- ширина столбца 10 символов (в двоичном формате
  надо добавить два пробела между столбцами
  для разделения октетов между собой)

Пример вывода для адреса 10.1.1.1:
10        1         1         1
00001010  00000001  00000001  00000001

Ограничение: Все задания надо выполнять используя только пройденные темы.

Предупреждение: в разделе 4 тесты можно легко "обмануть" сделав нужный вывод,
без получения результатов из исходных данных с помощью Python.
Это не значит, что задание сделано правильно, просто на данном этапе сложно иначе
проверять результат.
"""
#Максим

# ip = "192.168.3.1"
# ip2 =ip
# ip = ip.split('.')
# ip2 = ip2.split('.')

# print('{:<8} {:<8} {:<8} {:<8}'.format(int(ip[0]),int(ip[1]),int(ip[2]),int(ip[3])))
# print('{:08b} {:08b} {:08b} {:08b}'.format(int(ip2[0]),int(ip2[1]),int(ip2[2]),int(ip2[3])))


# Тома

ip = "192.168.3.1"
result = ip.split('.')


print('{:<8} {:<8} {:<8} {:<8}'.format(int(result[0]),int(result[1]),int(result[2]),int(result[3])))
print('{:08b} {:08b} {:08b} {:08b}'.format(int(result[0]),int(result[1]),int(result[2]),int(result[3])))