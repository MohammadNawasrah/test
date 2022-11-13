from django.shortcuts import render
from django.http import HttpResponse



def index(request):
    return render(request, 'pages/index.html')

def std_reg(request):
    return render(request, 'pages/Student_Registration.html')