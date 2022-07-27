export class CategoryDto {
    id: number;
    name: string;
}

export class CreateCategoryDto {
    categories: CategoryDto[]

}