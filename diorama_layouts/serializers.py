from rest_framework import serializers
from .models import Diorama

class DioramaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Diorama
        fields = ('id', 'title', 'description', 'imgpath')