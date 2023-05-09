from django.db import models

# Create your models here.
class Note(models.Model):
    def __str__(self):
        return f"{self.id}.{self.title}.{self.tag}"
    tag = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    content = models.TextField()
    id = models.BigAutoField(primary_key=True)

class Atividades(models.Model):
    def __str__(self):
        return f"{self.name}-{self.role}-{self.day}/{self.month}/{self.year}"
    
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    role = models.CharField(max_length=16)
    day = models.TextField()
    month = models.TextField()
    year = models.TextField()
    feito = models.BooleanField()
    id = models.BigAutoField(primary_key=True)