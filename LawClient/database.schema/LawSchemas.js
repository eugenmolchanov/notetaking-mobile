const DisciplineSchema = {
    name: 'Discipline',
    primaryKey: 'id',
    properties: {
        id: 'int',
        name: 'string',
        abbreviation: 'string',
        freeAccess: 'bool',
        // questions: {type: 'linkingObjects', objectType: 'Question', property: 'discipline'},
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
        discipline: 'Discipline',
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

// const QuestionContractionSchema = {
//     name: 'QuestionContraction',
//     properties: {
//         questionId: {type: 'linkingObjects', objectType: 'Question', property: 'id'},
//         contractionId: ,
//     },
// };

const schemas = [DisciplineSchema, QuestionSchema, ContractionSchema];

export default schemas;
