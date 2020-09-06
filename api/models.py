from django.db import models

class Word(models.Model):
    title = models.CharField(max_length=200)

    def __str__(self):
        return self.title
