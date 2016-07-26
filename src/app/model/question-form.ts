export class QuestionForm {
    id: string
    title: string;
    description: string;
    chapters: QuestionFormChapter[];
}

export class QuestionFormChapter {
    id: string
    number: number;
    title: string;
    description: string;
    subChapters: QuestionFormChapterSubChapter[]
}

export class QuestionFormChapterSubChapter {
    id: string
    number: number;
    title: string;
    description: string;
    questions: QuestionFormQuestion[];

}

export class QuestionFormQuestion {
    id: string;
    type: string;
    caption: string;
    isValid: boolean;

    errorString: string;
    textQuestion: TextQuestion;

    optionQuestion: OptionQuestion;
    multiOptionQuestion: MultiOptionQuestion;
    uploadQuestion: UploadQuestion;
    integerQuestion: IntegerQuestion;
    formListQuestion: FormListQuestion;
  
}

export class TextQuestion  {

    isRequired: boolean;
    textValue: string;
    placeHolder: string;


}

export class OptionQuestion {

    options: string[];
    selectedOption: string;

}

export class MultiOptionQuestion {

    options: string[];
    selectedOptions: string[];
    minSelect: number;

}

export class UploadQuestion {
    fileName: string;
    isRequired: boolean;
}

export class IntegerQuestion {
    number: number;
    min: number;
    max: number;
}

export class FormListQuestion {
    templateQuestions: QuestionFormQuestion[];
    questions: FormListQuestionItem[];
}

export class FormListQuestionItem {
    answers: QuestionFormQuestion[];
}
