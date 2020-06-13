from django.db import models

# Create your models here.

class Diorama(models.Model):
      title = models.CharField(max_length=120)
      description = models.TextField()
      imgpath = models.CharField(max_length=120)

      def _str_(self):
        return self.title