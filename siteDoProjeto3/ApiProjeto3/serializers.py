from rest_framework import serializers
from .models import Note, Rotina


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ['id', 'title', 'content','tag']

class RotinasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rotina
        fields = ["nome","descricao","setor","dia","mes","ano"]