type CategoryProps ={
    id?: string;
    title: string;      
    color: string;
}

export class Category {

    public id?: string;
    public title: string;
    public color: string;

    constructor(propst: CategoryProps) {
    
        this.id = propst.id;
        this.title = propst.title;
        this.color = propst.color.toUpperCase();

    }
}

const category = new Category( {
    title: 'Teste',
    color: '#ff33bb'
});