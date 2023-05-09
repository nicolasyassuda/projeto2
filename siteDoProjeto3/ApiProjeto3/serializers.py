from rest_framework import serializers
from .models import Note, Atividades


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ['id', 'title', 'content','tag']

class AtividadesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Atividades
        fields = ["name","description","role","day","month","year","feito","id"]