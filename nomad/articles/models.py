from django.db import models
from django.utils.text import slugify
class Author(models.Model):
    name = models.CharField(max_length=100,default='')
    def __str__(self):
        return self.name
class Category(models.Model):
    name = models.CharField(max_length=100)
    def __str__(self):
        return self.name


    


    
    
class Post(models.Model):
    title= models.CharField(max_length=200)
    subtitle = models.CharField(max_length = 255,default='')
    heading1 = models.CharField(max_length = 100,blank = True, null = True, default='')
    
    content1 = models.TextField(blank = False, null = False, default='' )
    heading2 = models.CharField(max_length = 100,blank = True, null = True, default='')
    content2 = models.TextField(blank = False, null = False, default='')
    heading3 = models.CharField(max_length = 100,blank = True, null = True, default='')
    content3 = models.TextField(blank = True, null = True, default='')
    heading4 = models.CharField(max_length = 100,blank = True, null = True,default='')
    content4 = models.TextField(blank = True, null = True,default='')
    heading5 = models.CharField(max_length = 100,blank = True, null = True,default='')
    content5 = models.TextField(blank = True, null = True,default='')
    heading6 = models.CharField(max_length = 100,blank = True, null = True,default='')
    content6 = models.TextField(blank = True, null = True,default='')
    heading7 = models.CharField(max_length = 100,blank = True, null = True,default='')
    content7 = models.TextField(blank = True, null = True,default='')
    heading8 = models.CharField(max_length = 100,blank = True, null = True,default='')
    content8 = models.TextField(blank = True, null = True,default='')
    heading9 = models.CharField(max_length = 100,blank = True, null = True,default='')
    content9 = models.TextField(blank = True, null = True,default='')
    heading10 = models.CharField(max_length = 100,blank = True, null = True,default='')
    content10 = models.TextField(blank = True, null = True,default='')
    author = models.ForeignKey(Author, on_delete=models.CASCADE, default='')
    
    pub_date = models.DateTimeField(auto_now_add = True)
    category = models.ManyToManyField(Category,blank='true')
    title_image = models.ImageField(upload_to='post_images/',blank = True, null = True, default='')
    image1 = models.ImageField(upload_to='post_images/',blank = True, null = True,default='' )
    image2 = models.ImageField(upload_to='post_images/',blank = True, null = True,default='' )
    image3 = models.ImageField(upload_to='post_images/',blank = True, null = True,default='' )
    slug = models.SlugField(unique = True, blank = True)
    image4 = models.ImageField(upload_to='post_images/',blank = True, null = True,default='' )
    image5 = models.ImageField(upload_to='post_images/',blank = True, null = True,default='' )
    image6 = models.ImageField(upload_to='post_images/',blank = True, null = True,default='' )
    slug = models.SlugField(unique = True, blank = True)
    image7 = models.ImageField(upload_to='post_images/',blank = True, null = True,default='' )
    image8 = models.ImageField(upload_to='post_images/',blank = True, null = True,default='' )
    image9 = models.ImageField(upload_to='post_images/',blank = True, null = True,default='' )
    slug = models.SlugField(unique = True, blank = True)
    image10 = models.ImageField(upload_to='post_images/',blank = True, null = True,default='' )
    slug = models.SlugField(unique = True, blank = True)
    is_best = models.BooleanField(default = False)
    is_recommended = models.BooleanField(default = False)
    def save(self,*args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)
    
    

    def __str__(self):
        return self.title