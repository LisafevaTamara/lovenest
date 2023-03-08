# -*- coding: utf-8 -*-
"""
Задание 7.1

Обработать строки из файла ospf.txt и вывести информацию по каждой строке в таком
виде на стандартный поток вывода:

Prefix                10.0.24.0/24
AD/Metric             110/41
Next-Hop              10.0.13.3
Last update           3d18h
Outbound Interface    FastEthernet0/0

Ограничение: Все задания надо выполнять используя только пройденные темы.

"""
#  Максим

# with open("exercises/07_files/ospf.txt", "r") as f:

#     output = "\n{:20} {}" * 5
#     for line in f:
#            mass = line.replace(",", " ")
#            mass = mass.replace("[", "")
#            mass = mass.replace("]", "")
#            mass = mass.split()


#            print(output.format(
#                  "Prefix", mass[1],
#                  "AD/Metric", mass[2],
#                  "Next-Hop", mass[4],
#                  "Last update", mass[5],
#                  "Outbound Interface", mass[6],
#          ))


# Тома
with open("exercises/07_files/ospf.txt", "r") as f:

    output = "\n{:25} {}" * 5
    for line in f:
           ospf = line.replace(",", " ").replace("[", "").replace("]", "")
           ospf = ospf.split()


           print(output.format(
                 "Prefix", ospf[1],
                 "AD/Metric", ospf[2],
                 "Next-Hop", ospf[4],
                 "Last update", ospf[5],
                 "Outbound Interface", ospf[6],
         ))