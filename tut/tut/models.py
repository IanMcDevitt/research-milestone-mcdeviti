from django.db import models

class Color(models.Model):
    colorcode = models.CharField(max_length=200)

    def __str__(self):
        return self.colorcode