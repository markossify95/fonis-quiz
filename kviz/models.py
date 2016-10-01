from django.db import models


class Question(models.Model):
    text = models.CharField(max_length=200)
    ans1 = models.CharField(max_length=50)
    valid1 = models.BooleanField(default=False)
    ans2 = models.CharField(max_length=50)
    valid2 = models.BooleanField(default=False)
    ans3 = models.CharField(max_length=50)
    valid3 = models.BooleanField(default=False)
    ans4 = models.CharField(max_length=50)
    valid4 = models.BooleanField(default=False)


class Slave(models.Model):
    name = models.CharField(max_length=20)
    surname = models.CharField(max_length=20)
    score = models.FloatField(default=0)
    email = models.EmailField(max_length=70, blank=True)
