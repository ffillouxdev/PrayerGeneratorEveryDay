from rest_framework import serializers
from myapp.models import Prayer, RandomImg, Intention, RubriquesYS, Audio, MailReception


class PrayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prayer
        fields = "__all__"


class RandomImgSerializer(serializers.ModelSerializer):
    class Meta:
        model = RandomImg
        fields = "__all__"


class IntentionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Intention
        fields = "__all__"


class RubriquesYSSerializer(serializers.ModelSerializer):
    class Meta:
        model = RubriquesYS
        fields = "__all__"


class AudioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Audio
        fields = "__all__"


class MailReceptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = MailReception
        fields = '__all__'