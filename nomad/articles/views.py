from django.shortcuts import render,redirect,get_object_or_404
from typing import Any
from django.views.generic import ListView,DetailView,TemplateView,UpdateView
from django.views.generic.edit import CreateView,DeleteView
from .models import Post
from .forms import SearchForm
from django.urls import reverse,reverse_lazy

class Index(ListView):
    context_object_name = 'posts'
    queryset = Post.objects.all()
    
    def get_context_data(self,**kwargs):
       context = super().get_context_data(**kwargs)
       context['recommended_posts'] = Post.objects.filter(is_recommended = True)
       context['best_posts'] = Post.objects.filter(is_best=True)
       return context

class AiTrendsView(ListView):
    context_object_name = 'posts'
    queryset = Post.objects.all()
    template_name = 'articles/trends_ai.html'
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['ai_trends'] = Post.objects.filter(is_trends_ai = True)
        return context
    
class DataTrendsView(ListView):
    context_object_name = 'posts'
    queryset = Post.objects.all()
    template_name = 'articles/trends_data.html'
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['data_trends']= Post.objects.filter(is_trends_data = True)
        return context
    
class IndustryInsightsView(ListView):
    context_object_name = 'posts'
    queryset = Post.objects.all()
    template_name = 'articles/industry_insights.html'
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['industry_insights']= Post.objects.filter(is_industry_insights = True)
        return context
    
class AiSoftwareView(ListView):
    context_object_name = 'posts'
    queryset = Post.objects.all()
    template_name = 'articles/ai_software.html'
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['ai_software']= Post.objects.filter(is_ai_software = True)
        return context
         
        
    
class Detail(DetailView):
    model = Post
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        post = self.object
        
        comment_count = post.comments.count()
        
        context['comment_form'] = CommentForm
        context['comment_count'] = comment_count
 
        return context
    
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
    
from .models import Comment
from django.contrib.auth.mixins import LoginRequiredMixin
from .forms import CommentForm

class CommentView(LoginRequiredMixin, CreateView):
    model = Comment
    form_class = CommentForm
 
    #格納する値をチェック
    def form_valid(self, form):
        form.instance.author = self.request.user
        post_slug = self.kwargs.get('slug')
        post = get_object_or_404(Post, slug=post_slug)
 
        comment = form.save(commit=False)
        comment.target = post
        comment.save()
 
        return redirect('detail', slug=post_slug,)
    
    
    
  
class CommentDeleteView(DeleteView):
    model = Comment
    template_name = 'articles/confirm_comment_delete.html'
    
    def get_success_url(self):
        # 削除後にコメントが属していた記事の詳細ページへのURLを生成
        return reverse('detail', kwargs={'slug': self.object.target.slug})

class CommentEditView(UpdateView):
    model = Comment
    template_name = 'articles/edit_comment.html'
    fields = ['content']
    def get_success_url(self):
        return reverse('detail', kwargs={'slug': self.object.target.slug})