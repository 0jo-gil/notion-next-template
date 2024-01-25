 class PostResponseDto {
    constructor(id, tags, title, description, status, createdAt) {
        this.id = id;
        this.tags = tags;
        this.title = title;
        this.description = description;
        this.status = status;
        this.createdAt = createdAt;
    }

    static from (page) {
        return new PostResponseDto(
            page.id,
            page.properties.tags.multi_select?.map((tag) => tag.name),
            page.properties.title?.title?.[0]?.plain_text,
            page.properties.description?.rich_text?.[0]?.plain_text,
            page.properties.status?.checkbox,
            page.properties.createdAt?.date?.start,
        );
    }
}

module.exports = {
    PostResponseDto,
}