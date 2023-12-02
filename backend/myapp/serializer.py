from rest_framework import serializers
from .models import *

class PrayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prayer
        fields = ['id', 'prayer_text']
    
class RandomImgSerializer(serializers.ModelSerializer):
    class Meta:
        model = RandomImg
        fields = ['id', 'img']