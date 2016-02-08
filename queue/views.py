from django.shortcuts import render_to_response
from django.template import RequestContext

# Create your views here.
def renderQueue(request):
        #get general context
	context = RequestContext(request)

	return render_to_response('queue/queue.html', {}, context)

def renderProgress(request):
        #get general context
	context = RequestContext(request)

	return render_to_response('queue/progress.html', {}, context)

