from django.shortcuts import render, HttpResponse
from .models import Prayer
from .models import RandomImg
import random

def home(request):
    # Récupérez une prière aléatoire
    random_prayer = random.choice(Prayer.objects.all())
    # Récupérez une image aléatoire
    random_image = random.choice(RandomImg.objects.all())
    
    context = {
        'prayer': random_prayer,
        'randomImg': random_image,
    }
    
    return render(request, 'home.html', context)

def contact(request):
    return render(request, 'contact.html')

def about(request):
    return render(request, 'about.html')
