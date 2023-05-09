from django.shortcuts import render, redirect
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import Http404
from .serializers import AtividadesSerializer
# Create your views here.
import pymongo
from .models import Atividades
client = pymongo.MongoClient('mongodb://nicolasyassuda:nicolasyassuda09022003@15.229.166.67/projeto3')
db = client['projeto3']
coll = db['rotinas']

@api_view(['POST'])
def salvarRotinas(request):

    if request.method == 'POST':
        try:
            ultimoId = coll.find().sort("id",-1)[0]
            request.data['id'] = ultimoId['id']+1
            coll.insert_one(request.data)
            return Response(200)
        except:
            return Response({"Bad-Request"},403)

@api_view(['POST'])
def atualizarRotinas(request):

    coll.update_one({"id":request.data['id']},{"$set":{"feito":request.data['feito']}})
    return Response(200)

@api_view(['POST'])
def deletarRotinas(request):
    coll.delete_one({"id":request.data['id']})
    return Response(200)

@api_view(['GET'])
def pegarRotinas(request,ano,mes):
    ListaSerializedRotinas = []
    retorno = coll.find({"month":mes,"year":ano})
    for i in retorno:
        rotinas = Atividades()
        rotinas.name = i['name']
        rotinas.description = i['description']
        rotinas.role = i['role']
        rotinas.day = i['day']
        rotinas.month = i['month']
        rotinas.year = i['year']
        rotinas.feito = i['feito']
        rotinas.id = i['id']
        ListaSerializedRotinas.append(rotinas)
    return Response(AtividadesSerializer(ListaSerializedRotinas,many=True).data)
    # return Response(200)