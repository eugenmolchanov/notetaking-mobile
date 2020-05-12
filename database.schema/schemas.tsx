const DisciplineSchema = {
    name: 'Discipline',
    primaryKey: 'id',
    properties: {
        id: 'int',
        name: 'string',
        abbreviation: 'string',
        freeAccess: 'bool',
    },
};

const QuestionSchema = {
    name: 'Question',
    primaryKey: 'id',
    properties: {
        id: 'int',
        name: 'string',
        number: 'int',
        disciplineId: 'int',
    },
};

const QuestionContentSchema = {
    name: 'QuestionContent',
    primaryKey: 'questionId',
    properties: {
        questionId: 'int',
        fullContent: 'string',
        shortContent: 'string',
        contractions: 'Contraction[]',
    },
};

const ContractionSchema = {
    name: 'Contraction',
    primaryKey: 'id',
    properties: {
        id: 'int',
        name: 'string',
        description: 'string',
    },
};

const schemas = [DisciplineSchema, QuestionSchema, ContractionSchema, QuestionContentSchema];

export default schemas;
