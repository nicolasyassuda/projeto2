from rest_framework import serializers
from .models import Note, Atividades, FunFact


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ['id', 'title', 'content','tag']

class AtividadesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Atividades
        fields = ["name","description","role","day","month","year","feito","id"]


class FunFactSerializer(serializers.ModelSerializer):
    class Meta:
        model = FunFact
        #fields = ["id", "text"]
        fields = ["id", "fact"]