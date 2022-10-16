from random import choices
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


class Menus(models.Model):
    group_chices = (
        ('admin','admin'),
        ('common_user','common_user')
    )
    group = models.CharField(max_length=128, choices=group_chices)
    menus = models.TextField()

    def __str__(self):
        return self.group
