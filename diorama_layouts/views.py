from django.shortcuts import render
from rest_framework import viewsets
from .serializers import DioramaSerializer
from .models import Diorama

from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache

index = never_cache(TemplateView.as_view(template_name='index.html'))

class DioramaView(viewsets.ModelViewSet):
    serializer_class = DioramaSerializer       
    queryset = Diorama.objects.all()          