from django.db import models


class Courses(models.Model):
    name = models.CharField(max_length=128)
    today_buy = models.IntegerField()
    month_buy = models.IntegerField()
    total_buy = models.IntegerField()
    
    def __str__(self):
        return self.name


class Order(models.Model):
    name = models.CharField(max_length=128)
    value = models.IntegerField()
    icon = models.CharField(max_length=128)
    color = models.CharField(max_length=128)
    
    def __str__(self):
        return self.name
