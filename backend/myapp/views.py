from django.http import JsonResponse
from .models import *
import random
from django.views.decorators.http import require_POST, require_GET

from rest_framework.views import APIView, exception_handler
from rest_framework.response import Response
from .serializers import *
from rest_framework.permissions import IsAuthenticated, AllowAny


def custom_exception_handler(exc, context):
    response = exception_handler(exc, context)

    if response is not None:
        response.data['detail'] = str(exc)

    return response

class PrayerView(APIView):
    permission_classes = [AllowAny]
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
    permission_classes = [AllowAny]
    def get(self, request):
        output = [{"id": randomImg.id, "img_url": randomImg.img_url.url} 
                  for randomImg in RandomImg.objects.all()]
        return Response(output)

  
class IntentionView(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        output = [{"id" : intention.id,"intention_title" : intention.intention_title, "intention_text" : intention.intention_text, "type_of_people" : intention.type_of_people}
                  for intention in Intention.objects.all()]
        return Response(output)

    def post(self, request):
        print("Received data:", request.data)
        serializer = IntentionSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


class RubriqueView(APIView):    
    permission_classes = [AllowAny]
    def get(self, request):
        output = [{"id": rubrique.id, "rubriqueName": rubrique.rubriqueName}
                  for rubrique in RubriquesYS.objects.all()]
        return Response(output)
    def post(self, request):
        serializer = RubriquesYSSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

class AudioView(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        try:
            output = [{"id": audio.id, "audioName": audio.audioName, "audioUrl": audio.audioUrl.url, "imgAudioUrl": audio.imgAudioUrl.url, "author": audio.author, "historyOfAudio": audio.historyOfAudio}
                      for audio in Audio.objects.all()]
            return Response(output)
        except Exception as e:
            return Response({'error': str(e)}, status=500)

    def post(self, request):
        serializer = AudioSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=201)
        else:
            return Response(serializer.errors, status=400)

    # Fonction qui va permettre de rechercher les audios dans la base de données à partir de ce que l'input de l'utilisateur
    def get_Audio_search(self):
        query = self.request.GET.get('q')
        if query:
            queryset = queryset.filter(audioName__icontains=query)
            return Audio.objects.filter(audioName__icontains=query).order_by

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
