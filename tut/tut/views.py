
from django.shortcuts import render
 
# import view sets from the REST framework
from rest_framework import viewsets
from django.http  import JsonResponse
from .models import Color
from .serializers import TutSerializer
"""
     def color_list(request) :
    color = Color.objects.all()
    serializer = TutSerializer(color, many=True)
    return JsonResponse({"color" : serializer.data}, safe= False)
"""



# Rest api end point
class ColorView(viewsets.ModelViewSet):
    """
    Returns Json list of all restaurants
    """
    serializer_class = TutSerializer
    queryset = Color.objects.all()
    serializer = TutSerializer(queryset, many=True)
    #serializer = TutSerializer
    #color_list = Color.objects.all()
    #return JsonResponse({"color" : serializer.data}, safe=False)