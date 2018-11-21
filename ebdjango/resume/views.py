from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    context = None
    return render(request, 'resume/index.html', context)

# def index(request):
#     return HttpResponse("Hello, world. You're at the polls index.")