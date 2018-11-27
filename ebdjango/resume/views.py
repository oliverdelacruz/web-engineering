import os
from django.conf import settings
from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    context = None
    return render(request, 'resume/index.html', context)

# Download a pdf file
def download(request):
    file_path = os.path.join(settings.STATIC_ROOT, 'pdf/cv.pdf')
    if os.path.exists(file_path):
        with open(file_path, 'rb') as fh:
            response = HttpResponse(fh.read(), content_type="application/pdf")
            response['Content-Disposition'] = 'attachment; filename=' + os.path.basename(file_path)
            return response

# def index(request):
#     return HttpResponse("Hello, world. You're at the polls index.")