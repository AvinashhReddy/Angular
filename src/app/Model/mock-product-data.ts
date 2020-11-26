import {Product} from './product';

export class MockData{
    public static Products:Product[] = [
        {
            'id':11,
            'title':'OPPO f17 (while, 64 GB)',
            'modelName' : 'F17',
            'color': 'white',
            'productType': 'Mobile',
            'brand': 'OPPO',
            'price': 16253
        },
        {
            'id':12,
            'title':'Dell Inspiron 4500',
            'modelName' : 'Inspiron',
            'color': 'Black',
            'productType': 'Laptop',
            'brand': 'DELL',
            'price': 50000
        }
    ];
}