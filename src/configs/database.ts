const DATABASE_NAME= '@gameplay';

//padrão de collection (@nome do app: nome da collection);

const COLLECTION_USERS = `${DATABASE_NAME}:user`;
const COLLECTION_APPOINTMENTS= `${DATABASE_NAME}:appointmets`;

export {
    COLLECTION_APPOINTMENTS,
    COLLECTION_USERS,
}