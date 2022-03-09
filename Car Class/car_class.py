# Task 1
class car():
    def __init__(self, year, make, model):
        self.year = year
        self.make = make
        self.model = model
        self.running = False
        self.speed = 0
    def turOn(self):
        self.running = True
    def turnOff(self):
        self.running = False
    def changeSpeed(self, accel):
        self.speed += accel

# Task 2        
mustang1 = car (2018, "Ford", "Mustang")
ferrari1 = car (1962, "Ferrari","250 GTO")
buggati1 = car (2016, "Buggati", "Chiron")    

# Task 3, Communicate

