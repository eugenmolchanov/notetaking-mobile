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
        fullContent: 'string',
        shortContent: 'string',
        disciplineId: 'int',
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

const schemas = [DisciplineSchema, QuestionSchema, ContractionSchema];

export default schemas;
