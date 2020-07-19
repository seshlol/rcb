export default class IngredientService {

    static getIngredients = (ingredientName) => {

        return [
            {
                id: '265',
                name: "Wagyu",
                imgSrc: "./img/ingredients/cow-meat.png",
                imgAlt: "cow meat"
            },
            {
                id: '7266',
                name: "Chicken egg",
                imgSrc: "./img/ingredients/chicken-egg.png",
                imgAlt: "super white giant chicken egg"
            },
            {
                id: '4887',
                name: "Black bread",
                imgAlt: "black bread"
            },
            {
                id: '9387',
                name: "Tomato",
                imgSrc: "./img/ingredients/tomato.png",
                imgAlt: "thesuperiest tomato"
            },
            {
                id: '112',
                name: "Thymeleaf",
                imgSrc: "",
                imgAlt: "thymeleaf"
            },
            {
                id: '214',
                name: "Salmon",
                imgSrc: "./img/ingredients/Salmon.png",
                imgAlt: "salmon"
            }
        ];
    };
}