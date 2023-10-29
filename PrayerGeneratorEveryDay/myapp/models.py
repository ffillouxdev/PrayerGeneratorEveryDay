from django.db import models
import datetime
from django.utils import timezone
from django.templatetags.static import static


class Prayer(models.Model):
    prayer_text = models.CharField(max_length=200)
    def __str__(self):
        return self.prayer_text
    
class RandomImg(models.Model):
    img = models.ImageField(upload_to='assets/')
    
    def img_url(self):
        return static(self.img.name)
    
    def __str__(self):
        return self.img.name