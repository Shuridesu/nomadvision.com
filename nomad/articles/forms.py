from django import forms
from .models import Comment
class SearchForm(forms.Form):
    word = forms.CharField(max_length=100)
    
class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ('content',)