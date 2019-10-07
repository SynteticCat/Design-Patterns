/*
 * (en) The "Factory" Pattern is used to create objects. 
 * If we need to create a single object, we can use 
 * "Module" Pattern for example. Sometimes we need to
 * create object by data and provide abstraction as API to designer.
 * This pattern is interface to creating objects. 
 * 
 * Use:
 * If constructor have high difficulty of creating object.
 * If objects created from several sources. 
 * If objects created with many common fields.
 * 
 * Implementation:
 * This pattern implemented by designer.
 * P.S.: Own description and own example 
 * (an example is created for educational purposes and this specific problem can solved better)
 */
const ErrorService = {
    isCorrectID(id) { return typeof id === 'string' && id.length === 6 && !isNaN(id); },
    uncorrectID(id) { console.error(`${id} is uncorrect`) }
};

const ProductItemService = {
    data: {
        '132768': { 
            name: 'milk',
            cost: 13
        },
        '814973': { 
            name: 'butter',
            cost: 17
        },
        '293484': { 
            name: 'sugar',
            cost: 5
        },
    },

    getCost(id) { return this.data[id].cost; },
    getName(id) { return this.data[id].name; }
};

const ProviderService = {
    providers: [{
        name: 'YOUTH 2020, LLC',
        telephone: '+7 (777) 777 77 77',
        location: 'Russia, Moscow',
        products: ['132768', '814973']
    }, {
        name: 'Ingredients, AO',
        telephone: '+7 (898) 898 89 89',
        location: 'Russia, Saint-Petersburg',
        products: ['293484']
    }],
    
    getProvider: function(id) {
        return this.providers.filter(provider => provider.products.includes(id))[0];
    }
};

class ProductItemFactory {
    constructor(stock = 'CJSC "Kuzminskoe"') {
        this.stock = stock;
    }

    createModel(id) {
        return ErrorService.isCorrectID(id) ? this.__createModel(id) : ErrorService.uncorrectID(id);
    }   

    __createModel(id) {
        return {
            cost: ProductItemService.getCost(id),
            name: ProductItemService.getName(id),
            provider: ProviderService.getProvider(id),
            stock: this.stock
        };
    }
}

// create model of product by ID from server
// then we can use this factory to create many models of products by list of ID (with some lifecircle)
const factory1 = new ProductItemFactory('JSC "Product Base"');
const factory2 = new ProductItemFactory();

const model1 = factory1.createModel('132768');
const model2 = factory1.createModel('293484');
const model3 = factory2.createModel('814973');

console.log(model1, model2, model3);
