 
 type PostResponseDtoProps = {
    id: string;
    tags: string[];
    title: string;
    description: string;
    status: boolean;
    createdAt: string;
}
 
 class PostResponseDto {
    id: string;
    tags: string[];
    title: string;
    description: string;
    status: boolean;
    createdAt: string;
    
    constructor ({id, tags, title, description, status, createdAt}: PostResponseDtoProps) {
        this.id = id;
        this.tags = tags;
        this.title = title;
        this.description = description;
        this.status = status;
        this.createdAt = createdAt;
    }

    static from (page: any) {
        return new PostResponseDto({
            id: page.id,
            tags: page.properties.tags.multi_select?.map((tag: any) => tag.name),
            title: page.properties.title?.title?.[0]?.plain_text,
            description: page.properties.description?.rich_text?.[0]?.plain_text,
            status: page.properties.status?.checkbox,
            createdAt: page.properties.createdAt?.date?.start,
        });
    }
}

export default PostResponseDto;