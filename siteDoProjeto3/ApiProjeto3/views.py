from django.shortcuts import render, redirect
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import Http404
from .serializers import NoteSerializer
# Create your views here.
import pymongo
from .models import Note
client = pymongo.MongoClient('mongodb://nicolasyassuda:nicolasyassuda09022003@15.229.166.67/projeto3')
db = client['projeto3']
coll = db['notas']

@api_view(['GET', 'POST'])
def api_note(request):

    if request.method == 'POST':
        try:
            new_note_data = request.data
            note = Note()
            note.title = new_note_data['title']
            note.content = new_note_data['content']
            note.id = new_note_data['id']
            note.tag = new_note_data['tag']
            coll.insert_one(request.data)
            return Response(200)
        except:
            return Response({"Bad-Request"},403)
    else:
        retorno = coll.find().sort('id',pymongo.DESCENDING)[0]
        notas = Note()
        notas.title = retorno['title']
        notas.tag = retorno['tag']
        notas.id = retorno['id']
        notas.content = retorno['content']
        serialized_note = NoteSerializer(notas)
        
        return Response(serialized_note.data)