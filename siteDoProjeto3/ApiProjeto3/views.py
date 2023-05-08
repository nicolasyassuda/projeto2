from django.shortcuts import render, redirect
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import Http404
from .serializers import RotinasSerializer
# Create your views here.
import pymongo
from .models import Rotina
client = pymongo.MongoClient('mongodb://nicolasyassuda:nicolasyassuda09022003@15.229.166.67/projeto3')
db = client['projeto3']
coll = db['notas']

@api_view(['GET', 'POST'])
def api_note(request):

    if request.method == 'POST':
        try:
            coll.insert_one(request.data)
            return Response(200)
        except:
            return Response({"Bad-Request"},403)
    else:
        retorno = coll.find({},{"month":request.data.month,"year":request.data.year})
        rotinas = Rotina()
        rotinas.name = retorno['name']
        rotinas.description = retorno['description']
        rotinas.role = retorno['role']
        rotinas.day = retorno['day']
        rotinas.month = retorno['month']
        rotinas.year = retorno['year']
        serializedRotinas = RotinasSerializer(rotinas)
        
        return Response(serializedRotinas.data)