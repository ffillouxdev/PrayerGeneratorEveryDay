# myapp/models.py

from django.db import models
from django.apps import AppConfig

class Prayer(models.Model):
    prayer_text = models.CharField(max_length=200)
    def __str__(self):
        return self.prayer_text

class RandomImg(models.Model):
    img_url = models.ImageField(upload_to='assets/')
    def __str__(self):
        return str(self.img_url)

class Intention(models.Model):
    PRAYER_FOR_YOU = 'Pour les votres'
    PRAYER_FOR_FAMILY = 'Pour votre famille'
    PRAYER_FOR_FRIENDS = 'Pour vos amis'
    PRAYER_FOR_ENEMIES = 'Pour vos ennemis'

    TYPE_OF_PEOPLE_CHOICES = [
        (PRAYER_FOR_YOU, 'Pour les votres'),
        (PRAYER_FOR_FAMILY, 'Pour votre famille'),
        (PRAYER_FOR_FRIENDS, 'Pour vos amis'),
        (PRAYER_FOR_ENEMIES, 'Pour vos ennemis'),
    ]

    intention_text = models.CharField(max_length=350)
    type_of_people = models.CharField(max_length=100, choices=TYPE_OF_PEOPLE_CHOICES)

    def __str__(self):
        return self.intention_text

# Subclass AppConfig and override ready() method
class MyappConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'myapp'

    def ready(self):
        # Import the function here to avoid circular import issues
        from myapp.models import reset_random_img
        # Call the function when the app is ready
        reset_random_img()


