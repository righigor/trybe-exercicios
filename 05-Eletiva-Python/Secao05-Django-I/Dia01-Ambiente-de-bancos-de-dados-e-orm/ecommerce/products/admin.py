from django.contrib import admin
from products.models import Product, Customer

# Register your models here.
admin.site.site_header = 'Trybe Products E-commerce'
admin.site.register(Product)
admin.site.register(Customer)