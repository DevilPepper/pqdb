from django.shortcuts import render_to_response
from django.template import RequestContext

# Create your views here.
def renderHome(request):
        #get general context
	context = RequestContext(request)

	return render_to_response('home/home.html', {}, context)

def renderAbout(request):
        #get general context
	context = RequestContext(request)

	return render_to_response('home/about.html', {}, context)
