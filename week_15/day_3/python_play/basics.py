# print("Hello billy")
#
# def say_hello():
#     print("Hello life")
#
# say_hello()

######################

# def greet(name):
#     if(name == "Zsolt"):
#         print("Hello " + name)
#     else:
#         print("Err... I don't know you...")
#
# greet("Zsolt")
# greet("Billy")

######################

# def greet(name):
#     print "Hello ", name
#
# # greet("Billy")# hash out once invoker is made
#
# def invoker(function):
#     name = "Billy"
#     function(name)
#
# invoker(greet)

######################

# my_array = [1,2,3,4,5]
#
# my_array.append(9)
#
# my_array.pop()
#
# my_array.reverse()
#
# print(my_array)

######################

# fav_foods = ["Eggs", "Sour cream", "Goulash"]
#
# for food in fav_foods:
#     print(food)

######################

# person = {
#     "name": "Darren",
#     "fav_food": ["pizza", "pizza again", "one more pizza"]
# }
#
# print(person["name"])
#
# for food in person["fav_food"]:
#     print food
#
# print(person.values())

######################

import numpy as np

my_array1 = np.array([2,3,4,5])
my_array2 = np.array([6,7,8,9])

print(my_array1 * my_array2)
