from django.db import models

class Word(models.Model):
    word = models.CharField(max_length=120, null=True, blank=True)
    usage_frequency = models.CharField(max_length=200, null=True, blank=True)
