from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from diorama_layouts import views


router = routers.DefaultRouter()
router.register(r'dioramas', views.DioramaView, 'diorama')

urlpatterns = [
    path('', views.index, name='index'),
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
]