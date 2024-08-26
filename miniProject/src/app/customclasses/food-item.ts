export class FoodItem {
[x: string]: any;

    constructor(
        public name ="",
        public description ="",
        public category ="",
        public price =0,
        public quantity_in_stock =0,
        public image = "",
        public created_at =new  Date(),
        public updated_at =new Date()        
        
    ){}
}
