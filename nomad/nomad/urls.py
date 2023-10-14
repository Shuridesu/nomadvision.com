
from django.contrib import admin
from django.urls import path,include
from allauth.account.views import LogoutView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('articles.urls')),
    path('account/', include('allauth.urls')),
    path('account/',LogoutView.as_view(),name = 'account_logout')
]
