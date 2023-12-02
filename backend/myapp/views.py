from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
from .models import *
import random
from django.views.decorators.http import require_POST

from rest_framework.views import APIView
from rest_framework.response import Response
from .serializer import *

class PrayerView(APIView):
    def get(self, request):
        output = [{"id": prayer.id, "prayer_text": prayer.prayer_text} 
                  for prayer in Prayer.objects.all()]
        return Response(output)
    def post(self, request):
        serializer = PrayerSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
        
class RandomImgView(APIView):
    def get(self, request):
        output = [{"id": img.id, "img": img.img_url()} 
                  for img in RandomImg.objects.all()]
        return Response(output)
    def post(self, request):
        serializer = RandomImgSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
        
from django.views.decorators.http import require_GET

@require_GET
def contact_view(request):
    render = render(request, 'contact.html')

@require_POST
def contact_view(request):
    data = {'content': 'Contenu de la page contact'}
    return JsonResponse(data)

@require_POST
def about_view(request):
    data = {'content': 'Contenu de la page about'}
    return JsonResponse(data)

"""
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
class PrayerViewSet(viewsets.ModelViewSet):
    serializer_class = PrayerSerializer
    queryset = Prayer.objects.all()

class RandomImgViewSet(viewsets.ModelViewSet):
    serializer_class = RandomImgSerializer
    queryset = RandomImg.objects.all()
"""
