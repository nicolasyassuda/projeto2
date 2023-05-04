from django.db import models

# Create your models here.
class Note(models.Model):
    def __str__(self):
        return f"{self.id}.{self.title}.{self.tag}"
    tag = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    content = models.TextField()
    id = models.BigAutoField(primary_key=True)