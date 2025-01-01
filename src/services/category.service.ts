import { Category } from '../entities/category.entity';

export class CategoriesService {
    public async create(): Promise<Category> {
        const category = new Category({
            title: 'exemple Cat',
            color: '#ff33bb',
        });
        
        return category;
    }
}