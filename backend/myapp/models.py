# myapp/models.py

from django.db import models
from django.apps import AppConfig


# Classe qui va permettre de stocker les prières dans la base de données qui seront affichées aléatoirement dans la page d'accueil
class Prayer(models.Model):
    prayer_text = models.CharField(max_length=200)

    def __str__(self):
        return self.prayer_text


# Classe qui va permettre de stocker les images dans la base de données qui seront affichées aléatoirement dans la page d'accueil
class RandomImg(models.Model):
    img_url = models.ImageField(upload_to="assets/")

    def __str__(self):
        return str(self.img_url)


# Classe qui va permettre de stocker les intentions que les gens rentrent dans la page your-space.jsx
class Intention(models.Model):
    PRAYER_FOR_YOU = "Pour les votres"
    PRAYER_FOR_FAMILY = "Pour votre famille"
    PRAYER_FOR_FRIENDS = "Pour vos amis"
    PRAYER_FOR_ENEMIES = "Pour vos ennemis"

    TYPE_OF_PEOPLE_CHOICES = [
        (PRAYER_FOR_YOU, "Pour les votres"),
        (PRAYER_FOR_FAMILY, "Pour votre famille"),
        (PRAYER_FOR_FRIENDS, "Pour vos amis"),
        (PRAYER_FOR_ENEMIES, "Pour vos ennemis"),
    ]
    intention_title = models.CharField(max_length=70, default="YourDefaultValue")
    intention_text = models.CharField(max_length=350)
    type_of_people = models.CharField(max_length=100, choices=TYPE_OF_PEOPLE_CHOICES)

    def __str__(self):
        return self.intention_title and self.intention_text


# Classe qui va permettre de stocker les futures sujet du "forum" dans la base de données
class RubriquesYS(models.Model):
    rubriqueName = models.CharField(max_length=100)

    def __str__(self):
        return self.rubriqueName


# Classe qui va permettre de stocker les audios dans la base de données pour la section ou l'on peut jouer un chant
class Audio(models.Model):
    audioName = models.CharField(max_length=150)
    audioUrl = models.FileField(upload_to="assets/audio/")
    imgAudioUrl = models.ImageField(upload_to="assets/")
    author = models.CharField(max_length=100)
    historyOfAudio = models.CharField(max_length=350)

    def __str__(self):
        return self.audioName


# Subclass AppConfig and override ready() method
class MyappConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "myapp"

    def ready(self):
        # Import the function here to avoid circular import issues
        from myapp.models import reset_random_img

        # Call the function when the app is ready
        reset_random_img()

from django.db import models

class MailReception(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=150)
    message = models.CharField(max_length=450)
    
    def __str__(self):
        return self.email

