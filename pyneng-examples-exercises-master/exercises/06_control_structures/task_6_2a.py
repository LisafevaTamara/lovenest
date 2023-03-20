# -*- coding: utf-8 -*-
"""
Задание 6.2a

Сделать копию скрипта задания 6.2.

Добавить проверку введенного IP-адреса.
Адрес считается корректно заданным, если он:
   - состоит из 4 чисел (а не букв или других символов)
   - числа разделенны точкой
   - каждое число в диапазоне от 0 до 255 +

Если адрес задан неправильно, выводить сообщение: 'Неправильный IP-адрес'

Сообщение "Неправильный IP-адрес" должно выводиться только один раз,
даже если несколько пунктов выше не выполнены.

Ограничение: Все задания надо выполнять используя только пройденные темы.
"""

# Максим

# ip = input("Введите IP-адресс: ")
# ip = ip.split(".")
# valid = True
# if len(ip) !=4:
#     valid = False
# else:
#     for i in range(len(ip)-1):
#         if not (ip[i].isdigit()):
#          valid = False
#          break
#         if int(ip[i]) < 0 or int(ip[i]) > 255:
#          valid = False
#          break
               

# if valid == False:
#     print("Неправильный IP-адрес")
# else:
#    if int(ip[0]) >=1 and int(ip[0]) <= 223:
#       print("unicast")

#    elif int(ip[0]) >=224 and int(ip[0]) <= 239:
#       print("multicast")
#    elif int(ip[0]) == 255:
#          flag = True
#          for i in range(1,3):
#             if int(ip[i]) != 255:
#                   flag = False
#                   break
#          if flag == True:
#             print("local broadcast")

#    elif int(ip[0]) == 0:
#       flag = True
#       for i in range(1,3):
#          if int(ip[i]) != 0:
#                flag = False
#                break
#          if flag == True:
#             print("unassigned")

#    else:
#       print("unused")

            

#Тома
ip = input("введите ip-адрес: ")
ip2 = ip.split(".")


f = True
if len(ip2) !=4:
     f = False
else:
    for i in range(len(ip2)-1):
        if not (ip2[i].isdigit()):
         f = False
         break
        if int(ip2[i]) < 0 or int(ip2[i]) > 255:
         f = False
         break
               

if f == False:
    print("Неправильный IP-адрес")
else:
   if ip == "255.255.255.255":
    print("local broadcast")
   elif ip == "0.0.0.0":
      print("unassigned")
   elif int(ip2[0])>=1 and int(ip2[0]) <= 223:
      print("unicast")
   elif int(ip2[0])>=224 and int(ip2[0]) <= 239:
      print("multicast")
   else:
      print("unused")