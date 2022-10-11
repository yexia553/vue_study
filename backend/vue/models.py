from django.db import models


class Courses(models.Model):
    name = models.CharField(max_length=128)
    today_buy = models.IntegerField()
    month_buy = models.IntegerField()
    total_buy = models.IntegerField()
    
    def __str__(self):
        return self.name
