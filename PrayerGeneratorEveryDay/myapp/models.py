from django.db import models
import datetime
from django.utils import timezone


class Prayer(models.Model):
    prayer_text = models.CharField(max_length=200)
    def __str__(self):
        return self.prayer_text
    
class RandomImg(models.Model):
    img = models.ImageField(upload_to='assets/')
    def __str__(self):
        return self.img.name