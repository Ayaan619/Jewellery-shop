//to list down all attributes of the product listed on the catalogue and to call it in services.
export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor(id=0 , name='' , description='', price=0 , imageUrl='https://cdn.shopify.com/s/files/1/1749/7309/articles/1800x1000_Timeless_Sterling_Silver_1400x.png?v=1564168672' ){
        this.id=id
        this.name=name
        this.description=description
        this.price=price
        this.imageUrl=imageUrl
    }
}
