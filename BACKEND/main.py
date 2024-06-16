from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List

app = FastAPI()

class Product(BaseModel):
    id: int
    name: str
    quantity: int
    sold_quantity: int
    remaining_quantity: int
    price: float
    supplier_name: str

products = [
    Product(id=1, name="Product 1", quantity=100, sold_quantity=20, remaining_quantity=80, price=10.99, supplier_name="Supplier 1"),
    Product(id=2, name="Product 2", quantity=200, sold_quantity=30, remaining_quantity=170, price=9.99, supplier_name="Supplier 2"),
]

@app.get("/products/", response_model=List[Product])
async def read_products():
    return products

@app.get("/products/{product_id}", response_model=Product)
async def read_product(product_id: int):
    for product in products:
        if product.id == product_id:
            return product
    raise HTTPException(status_code=404, detail="Product not found")

@app.post("/products/", response_model=Product)
async def create_product(product: Product):
    product.id = len(products) + 1
    products.append(product)
    return product

@app.put("/products/{product_id}", response_model=Product)
async def update_product(product_id: int, product: Product):
    for i, p in enumerate(products):
        if p.id == product_id:
            products[i] = product
            return product
    raise HTTPException(status_code=404, detail="Product not found")

@app.delete("/products/{product_id}")
async def delete_product(product_id: int):
    for i, p in enumerate(products):
        if p.id == product_id:
            del products[i]
            return {"message": "Product deleted"}
    raise HTTPException(status_code=404, detail="Product not found")