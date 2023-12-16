from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
from .models import *
import random
from django.views.decorators.http import require_POST, require_GET

from rest_framework.views import APIView, exception_handler
from rest_framework.response import Response
from .serializer import *

def custom_exception_handler(exc, context):
    response = exception_handler(exc, context)

    if response is not None:
        response.data['detail'] = str(exc)

    return response


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
        output = [{"id": randomImg.id, "img_url": randomImg.img_url.url} 
                  for randomImg in RandomImg.objects.all()]
        return Response(output)

  
class IntentionView(APIView):
    def get(self, request):
        output = [{"id" : intention.id, "intention_text" : intention.intention_text, "type_of_people" : intention.type_of_people}
                  for intention in Intention.objects.all()]
        return Response(output)

    def post(self, request):
        print("Received data:", request.data)
        serializer = IntentionSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)




@require_GET
def contact_get_view(request):
    render = render(request, 'contact.html')

@require_POST
def contact_post_view(request):
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
