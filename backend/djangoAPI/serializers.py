from django.contrib.auth import get_user_model
from rest_framework import serializers
from djoser.serializers import UserCreateSerializer

User = get_user_model()


class CreateUserSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = (
            "id",
            "email",
            "first_name",
            "last_name",
            "password",
            "is_active",
            "is_staff",
            "is_superuser",
        )