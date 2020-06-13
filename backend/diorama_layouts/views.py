from django.shortcuts import render
from rest_framework import viewsets
from .serializers import DioramaSerializer
from .models import Diorama      

class DioramaView(viewsets.ModelViewSet):
    serializer_class = DioramaSerializer       
    queryset = Diorama.objects.all()          