from django.shortcuts import render,redirect
from typing import Any
from django.db.models.query import QuerySet
from django.views.generic import ListView,DetailView,TemplateView
from django.views.generic.edit import FormView
from .models import Post
from .forms import SearchForm

class Index(ListView):
    context_object_name = 'posts'
    queryset = Post.objects.all()
    
    def get_context_data(self,**kwargs):
       context = super().get_context_data(**kwargs)
       context['recommended_posts'] = Post.objects.filter(is_recommended = True)
       context['best_posts'] = Post.objects.filter(is_best=True)
       return context   
    
class Detail(DetailView):
    model = Post
    
class About(TemplateView):
    template_name = "articles/about_us.html"
    
class Privacy(TemplateView):
    template_name = "articles/privacy_policy.html"
    
class Terms(TemplateView):
    template_name = "articles/terms_condition.html"

class SearchResultsView(ListView):
    model = Post
    template_name = 'articles/search_results.html'
    context_object_name = 'search_results'

    def get_queryset(self):
        query = self.request.GET.get('search_term', '')
        return Post.objects.filter(title__icontains=query)
    