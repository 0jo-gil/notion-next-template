type PostResponseDtoProps = {
    id: string;
    title: string;
    description: string;
    createdAt: string;
}

class PostResponseDto {
    id: string;
    title: string;
    description: string;
    createdAt: string;

    constructor ({id, title, description, createdAt}: PostResponseDtoProps) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.createdAt = createdAt;
    }

    static from (page: any) {
        return new PostResponseDto({
            id: page.id,
            title: page.properties.title?.title?.[0]?.plain_text,
            description: page.properties.description?.rich_text?.[0]?.plain_text,
            createdAt: page.properties.created_at?.date?.start,
        });
    }

}