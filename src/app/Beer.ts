export class Beer {
    name: string;
    calories: number;
    sodium: number;
    carbs: number;
    sugar: number;
    protein: number;
    ingredients: string;
    abv: number;
    servingSize: number;

    constructor(options = {}) {
        Object.assign(this, options);
    }
}

export class Serving {
    name: string;
    Oz: number;
}