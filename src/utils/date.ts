export const getDateFormatted = (date: string) => {
    return new Date(date).toLocaleDateString('ko-KR', {});
}