import os
from django.conf import settings
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from resume.models import Lead
from resume.serializers import LeadSerializer

# Create your views here.
def index(request):
    context = None
    return render(request, 'resume/index.html', context)


class LeadListCreate(generics.ListCreateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer


# Download a pdf file
def download(request):
    file_path = os.path.join(settings.STATIC_ROOT, 'pdf/cv.pdf')
    if os.path.exists(file_path):
        with open(file_path, 'rb') as fh:
            response = HttpResponse(fh.read(), content_type="application/pdf")
            response['Content-Disposition'] = 'attachment; filename=' + os.path.basename(file_path)
            return response

