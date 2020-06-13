from django.contrib import admin
from .models import Diorama

class DioramasAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'imgpath')

admin.site.register(Diorama, DioramasAdmin)