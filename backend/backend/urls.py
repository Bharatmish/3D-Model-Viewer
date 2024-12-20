from django.http import HttpResponse
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

# Define the home view to display a welcome message
def home(request):
    return HttpResponse("Welcome to the AR Models API!")

urlpatterns = [
    path('admin/', admin.site.urls),  # Admin site route
    path('api/', include('armodels.urls')),  # Include armodels app URLs
    path('', home),  # Default route for the home page
]

# Serve media files during development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
