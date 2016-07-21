export class FormShort {
        formId: string;
        title: string;
        description: string;
        status: string;
        chapters: ChapterShort[]; 
    }

export class ChapterShort {
    id: string;
    title: string;
    description: string;
    status: string;
}
