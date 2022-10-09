from rest_framework import serializers
from .models import Color
class TutSerializer(serializers.ModelSerializer) :
    class Meta:
        model = Color
        fields = ['id', 'colorcode']