import {createSlice} from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: "products",
    initialState:
        [
            {
                id: 777,
                name: "FriendShip Ring",
                type: "RING",
                sellerId: 333,
                variations: [
                    {
                        id: 77777,
                        description: "Silver ring with Rose Turmaline",
                        metal: "Silver",
                        stone: "Rose Turmaline",
                        cast: "Round setting",
                        price: 230,
                        images: [],
                    },
                    {
                        id: 77778,
                        description: "Gold Ring with Brilliant",
                        metal: "Gold",
                        stone: "Brilliant",
                        cast: "Chaton setting",
                        price: 320,
                        images: [],
                    },
                    {
                        id: 77779,
                        description: "Platin Ring with Amethyst",
                        metal: "Platin",
                        stone: "Amethyst",
                        cast: "Round setting",
                        price: 500,
                        images: [],
                    },
                ],

            },
            {
                id: 778,
                name: "Snoop Dog Chain",
                type: "CHAIN",
                sellerId: 334,
                variations: [
                    {
                        id: 88888,
                        description: "Gold Chain the original rapper item",
                        metal: "Gold",
                        stones: "none",
                        chainWeaving: "Classic",
                        price: 5000,
                        images: [],
                    }
                ]
            }
        ],
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload);
        },
        removeProduct: (state, action) => {
            return state.filter(product => product.id !== action.payload);
        },
        editProduct:(state,action)=>{
            let product = state.find(prod => prod.id === action.payload.prodId);
            product.name = action.payload.newProd.name;
            product.type = action.payload.newProd.type;
        },
        addVariant: (state, action) => {
            let product = state.find(prod => prod.id === action.payload.prodId);
            product.variations.push(action.payload.newVar);
        },
        removeVariant:(state,action)=>{
            let product = state.find(prod => prod.id === action.payload.prodId);
            product.variations.splice(action.payload.victimIndex,1);
        },
        editVariant:(state,action)=>{
            let product = state.find(prod => prod.id === action.payload.prodId);
            product.variations[action.payload.varIndex].description = action.payload.newVariant.description;
            product.variations[action.payload.varIndex].price = action.payload.newVariant.price;
        }
    }
})

export const {addProduct,removeProduct,editProduct, addVariant,removeVariant,editVariant } = productsSlice.actions;
export default productsSlice.reducer;